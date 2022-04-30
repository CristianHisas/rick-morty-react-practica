import { useState } from "react";

const useForms = () => {

  const [form, setForm] = useState({ 
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setForm({      
      ...form,
      [e.target.name]: e.target.value
    });
  }

  return [form, handleChange];
}

export default useForms;