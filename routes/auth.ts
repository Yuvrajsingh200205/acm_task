import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import pool from "../db/user";
import jwtConfig from '../config/jwtconfig';

const router = express.Router();

// Login
router.post('/login', async (req, res) => {
    const { username, password } = req.body;

    try {
        const result = await pool.query('SELECT * FROM admin WHERE username = $1', [
            username,
        ]);

        if (result.rows.length === 0)
            return res.status(400).json({ message: 'Invalid credentials' });

        const user = result.rows[0];

        const validPassword = await bcrypt.compare(password, user.password);

        if (!validPassword)
            return res.status(400).json({ message: 'Invalid credentials' });

        const token = jwt.sign({ username: user.username }, jwtConfig.secret, {
            expiresIn: jwtConfig.expiresIn,
        });

        res.json({ token });
    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

export default router;
