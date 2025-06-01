import React from 'react'

export default function Users() {
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('form submitted');
        console.log(form);

        // Send data to backend as JSON
        try {
            const response = await fetch('http://localhost:8080/uploadData', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(form),
            });
            const data = await response.json();
            console.log('Response from backend:', data);
        } catch (error) {
            console.error('Error sending data:', error);
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setForm((prev) => ({
            ...prev,
            [name]: value,
        }));
    }

    const [form, setForm] = React.useState({
        name: '',
        email: '',
        phone: '',
        age: 0,
        address: '',
        city: '',
        state: '',
        zip: 0,
        country: '',
        gender: '',
        jobTitle: '',
        company: '',
    })

  return (
    <div>
        <h1> Import your user Data</h1>
        <form onSubmit={handleSubmit}>
            <label >
                <input type="text" placeholder='Name' value={form.name} onChange={handleChange} name="name" />
            </label>
            <label >
                <input type="text" placeholder='Email' value={form.email} onChange={handleChange} name="email" />
            </label>
            <label >
                <input type="text" placeholder='Phone' value={form.phone} onChange={handleChange} name="phone" />
            </label>
            <label >
                <input type="number" placeholder='Age' value={form.age} onChange={handleChange} name="age" />
            </label>
            <label >
                <input type="text" placeholder='Address' value={form.address} onChange={handleChange} name="address" />
            </label>
            <label >
                <input type="text" placeholder='City' value={form.city} onChange={handleChange} name="city" />
            </label>
            <label >
                <input type="text" placeholder='State' value={form.state} onChange={handleChange} name="state" />
            </label>
            <label >
                <input type="text" placeholder='Zip' value={form.zip} onChange={handleChange} name="zip" />
            </label>
            <label >
                <input type="text" placeholder='Country' value={form.country} onChange={handleChange} name="country" /> 
            </label>
            <label >
                <input type="text" placeholder='Gender' onChange={handleChange} name="gender" />
            </label>
            <label >
                <input type="text" placeholder='Job Title' onChange={handleChange} name="jobTitle" />
            </label>
            <label >
                <input type="text" placeholder='Company' onChange={handleChange} name="company" />
            </label>
            <button type='submit'>
                send data
            </button>
        </form>
    </div>
  )
}
