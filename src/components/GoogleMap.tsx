interface GoogleMapProps {
  height?: string;
  className?: string;
}

export function GoogleMap({ height = "100%", className = "" }: GoogleMapProps) {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3125.5156903330976!2d-0.40173072371887886!3d38.42955587417258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd623ba74b93fe43%3A0xa8627ca8b5766787!2sESTUDIO%2051%20ESCUELA%20DE%20ARTE!5e0!3m2!1ses!2ses!4v1776602707398!5m2!1ses!2ses"
      width="100%"
      height={height}
      style={{
        border: 0,
        filter: "invert(90%) hue-rotate(180deg) contrast(1.2) brightness(0.95)",
      }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      className={`rounded ${className}`}
      title="Estudio 51 Escuela de Arte"
    />
  );
}
