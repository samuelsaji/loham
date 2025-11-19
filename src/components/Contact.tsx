import { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import lohamLogo from '@/assets/logo red name.png';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const sectionRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const { toast } = useToast();

  useEffect(() => {
    // ... (GSAP logic remains the same)
    const form = formRef.current;
    if (!form) return;

    const ctx = gsap.context(() => {
      gsap.from(form.querySelectorAll('.form-field'), {
        opacity: 0,
        y: 30,
        stagger: 0.1,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: form,
          start: 'top 80%',
        },
      });
    });

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    // ... (handleSubmit logic remains the same)
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: 'Incomplete Form',
        description: 'Please fill in all fields to continue.',
        variant: 'destructive',
      });
      return;
    }

    toast({
      title: 'Message Sent',
      description: 'We will be in touch shortly.',
    });

    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" ref={sectionRef} className="relative min-h-screen bg-deep-black px-6 py-24 md:px-12">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="mb-16 text-center">
          
          <div className="mb-6 flex items-baseline justify-center gap-4 md:gap-6">
            <h2 className="font-display text-4xl font-bold text-primary md:text-6xl">
              Connect with
            </h2>
            <img 
              src={lohamLogo} 
              alt="Loham" 
              className="h-12 w-auto -mt-1 animate-fade-in md:h-20 md:-mt-2"
            />
          </div>

          <p className="font-body text-lg text-metallic-aluminum">
            Let us craft something extraordinary together
          </p>
        </div>

        {/* Form */}
        <form ref={formRef} onSubmit={handleSubmit} className="space-y-8">
          <div className="form-field">
            <label
              htmlFor="name"
              className="mb-2 block font-body text-sm tracking-widest text-metallic-chrome"
            >
              NAME
            </label>
            <Input
              id="name"
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="border-metallic-gunmetal bg-transparent font-body text-primary placeholder:text-metallic-gunmetal focus:border-metallic-chrome"
              placeholder="Your name"
            />
          </div>

          <div className="form-field">
            <label
              htmlFor="email"
              className="mb-2 block font-body text-sm tracking-widest text-metallic-chrome"
            >
              EMAIL
            </label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="border-metallic-gunmetal bg-transparent font-body text-primary placeholder:text-metallic-gunmetal focus:border-metallic-chrome"
              placeholder="your@email.com"
            />
          </div>

          <div className="form-field">
            <label
              htmlFor="message"
              className="mb-2 block font-body text-sm tracking-widest text-metallic-chrome"
            >
              MESSAGE
            </label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              rows={6}
              className="border-metallic-gunmetal bg-transparent font-body text-primary placeholder:text-metallic-gunmetal focus:border-metallic-chrome"
              placeholder="Tell us about your vision..."
            />
          </div>

          <div className="form-field flex justify-center pt-4">
            <Button
              type="submit"
              className="group relative overflow-hidden bg-gradient-metallic px-12 py-6 font-body text-sm tracking-widest text-void-black transition-all duration-500 hover:shadow-metallic"
            >
              <span className="relative z-10">SUBMIT</span>
              <div className="absolute inset-0 -translate-x-full bg-gradient-chrome transition-transform duration-500 group-hover:translate-x-0" />
            </Button>
          </div>
        </form>
      </div>

      {/* Decorative Elements */}
      <div className="absolute left-0 top-1/4 h-px w-32 bg-gradient-to-r from-transparent to-metallic-gunmetal" />
      <div className="absolute right-0 top-3/4 h-px w-32 bg-gradient-to-l from-transparent to-metallic-gunmetal" />
    </section>
  );
};

export default Contact;
