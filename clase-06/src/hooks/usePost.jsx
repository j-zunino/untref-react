import { useState } from 'react';

export default function usePost() {
    const [formData, setFormData] = useState({
        postId: 0,
        name: '',
        email: '',
        body: ''
    });

    return { formData, setFormData };
}
