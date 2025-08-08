import { useEffect } from "react";

export default function WhatsAppRedirect() {
  useEffect(() => {
    // dispara conversão
    if ((window as any).gtag) {
      (window as any).gtag('event', 'conversion', {
        send_to: 'AW-17449048396/XXXXXXXXXXX', // <- substitua pelo seu
      });
    }
    // redireciona após um pequeno delay para garantir o envio
    const t = setTimeout(() => {
      window.location.replace(
        "https://wa.me/5511912824050?text=Olá%2C+gostaria+de+agendar+uma+consulta."
      );
    }, 150);
    return () => clearTimeout(t);
  }, []);

  return <p>Redirecionando para o WhatsApp...</p>;
}
