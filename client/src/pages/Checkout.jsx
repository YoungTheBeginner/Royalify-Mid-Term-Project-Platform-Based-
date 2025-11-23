import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

export default function Checkout(){
  const { items, total, clear } = useContext(CartContext);
  const navigate = useNavigate();
  const [form, setForm] = useState({name:'',email:'',address:''});
  const [loading,setLoading] = useState(false);

  function handleSubmit(e){
    e.preventDefault();
    if (!form.name || !form.email || !form.address) return alert('Please fill all fields');
    setLoading(true);
    // simulate order processing
    setTimeout(() => {
      const order = { id: 'ORD'+Date.now(), items, total, customer: form };
      localStorage.setItem('lastOrder', JSON.stringify(order));
      clear();
      setLoading(false);
      navigate('/thankyou');
    }, 900);
  }

  if (items.length === 0) {
    return <div className="container" style={{padding:40}}><h2>Your cart is empty</h2></div>;
  }

  return (
    <div className="container" style={{padding:20}}>
      <h2 style={{color:"var(--royal-gold)"}}>Checkout</h2>
      <form onSubmit={handleSubmit} style={{maxWidth:720, marginTop:18}}>
        <label style={{display:'block',marginBottom:8}}>Full name</label>
        <input value={form.name} onChange={e=>setForm({...form,name:e.target.value})} style={{width:'100%',padding:10,borderRadius:8,marginBottom:12}}/>

        <label style={{display:'block',marginBottom:8}}>Email</label>
        <input value={form.email} onChange={e=>setForm({...form,email:e.target.value})} style={{width:'100%',padding:10,borderRadius:8,marginBottom:12}}/>

        <label style={{display:'block',marginBottom:8}}>Shipping address</label>
        <textarea value={form.address} onChange={e=>setForm({...form,address:e.target.value})} style={{width:'100%',padding:10,borderRadius:8,marginBottom:12}} rows={4}/>

        <div style={{marginTop:12, display:'flex', justifyContent:'space-between', alignItems:'center'}}>
          <div>Total: <strong style={{color:'var(--royal-gold)'}}>${(total/100).toFixed(2)}</strong></div>
          <button className="cta" disabled={loading}>{loading ? 'Processing...' : 'Place Order'}</button>
        </div>
      </form>
    </div>
  );
}
