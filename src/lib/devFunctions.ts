const sendWhaPC = async (message: string) => {
    var whatsappLink = 'https://wa.me/' + '+523335695400' + '?text=' + encodeURIComponent(message);
    return whatsappLink;
  }

  export{
    sendWhaPC
  }