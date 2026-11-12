import { useState } from 'react';
import { AlertCircle, ArrowUpRight, CheckCircle2 } from 'lucide-react';

const initialForm = { name: '', email: '', message: '' };

export default function ContactForm() {
  const [formData, setFormData] = useState(initialForm);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState('idle');
  const update = event => setFormData(current => ({ ...current, [event.target.name]: event.target.value }));

  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);
    setStatus('idle');
    try {
      const payload = { ...formData, access_key: 'e531d982-107d-41a8-bead-6eabefeb4f5b', subject: 'New RAC club enquiry' };
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload),
      });
      const result = await response.json();
      if (!response.ok || !result.success) throw new Error(result.message || 'Unable to send message');
      setStatus('success');
      setFormData(initialForm);
    } catch (error) {
      console.error('RAC contact form error:', error);
      setStatus('error');
    } finally {
      setLoading(false);
    }
  }

  const fieldClass = 'mt-2 w-full border-0 border-b border-charcoal/25 bg-transparent px-0 py-3 text-sm text-charcoal outline-none transition placeholder:text-charcoal/35 focus:border-charcoal';
  return <form onSubmit={handleSubmit} className="space-y-6">
    <label className="block text-[10px] font-extrabold uppercase tracking-[.18em]">Your name<input className={fieldClass} name="name" value={formData.name} onChange={update} placeholder="How should we call you?" autoComplete="name" required maxLength={100}/></label>
    <label className="block text-[10px] font-extrabold uppercase tracking-[.18em]">Email address<input className={fieldClass} type="email" name="email" value={formData.email} onChange={update} placeholder="you@example.com" autoComplete="email" required maxLength={150}/></label>
    <label className="block text-[10px] font-extrabold uppercase tracking-[.18em]">Your message<textarea className={`${fieldClass} resize-y`} name="message" value={formData.message} onChange={update} placeholder="Tell us which sport you're interested in…" rows={4} required maxLength={2000}/></label>
    {status === 'success' && <p role="status" className="flex items-center gap-2 text-sm font-semibold text-green-800"><CheckCircle2 size={17}/> Message sent. Thanks for reaching out.</p>}
    {status === 'error' && <p role="alert" className="flex items-center gap-2 text-sm font-semibold text-red-700"><AlertCircle size={17}/> We couldn't send your message. Please try again.</p>}
    <button type="submit" disabled={loading} className="inline-flex w-full items-center justify-between bg-olive px-5 py-4 text-xs font-extrabold uppercase tracking-[.16em] text-charcoal transition hover:bg-charcoal hover:text-paper disabled:cursor-wait disabled:opacity-60">{loading ? 'Sending message…' : 'Send your message'} <ArrowUpRight size={18}/></button>
  </form>;
}
