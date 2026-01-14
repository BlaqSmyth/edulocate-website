import whatsappLogo from "@assets/065ba6391354d7a5fc84dd41d6f5d3b5_1768410796201.png";

export default function WhatsAppChat() {
  const whatsappUrl = "https://wa.me/447438974271";
  
  const handleWhatsAppClick = () => {
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={handleWhatsAppClick}
        className="hover:scale-110 transition-all duration-300 transform group"
        aria-label="Chat on WhatsApp"
      >
        <img 
          src={whatsappLogo} 
          alt="WhatsApp" 
          className="w-16 h-16 drop-shadow-lg"
        />
        
        {/* Tooltip */}
        <div className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white text-sm px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          Chat with us on WhatsApp
          <div className="absolute top-1/2 left-full transform -translate-y-1/2 border-4 border-transparent border-l-gray-800"></div>
        </div>
      </button>
    </div>
  );
}