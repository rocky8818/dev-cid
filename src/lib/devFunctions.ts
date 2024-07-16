const apiurl = import.meta.env.API_URL;


const sendWhaPC = async (message: string) => {
    var whatsappLink = 'https://wa.me/' + '+523335695400' + '?text=' + encodeURIComponent(message);
    return whatsappLink;
  }

  const getProyecto = async (id:string) => {
    try {
      const response = await fetch(`${apiurl}oneproject/${id}`);
      const data = await response.json();
      return data;
    } catch (error) {
    }
  }
  
  
  
  const getProyectos = async () => {
    try {
      const response = await fetch(`${apiurl}getprojects`);
      const data = await response.json();
      return data;
    } catch (error) {
    }
  }

  const getBanner = async () => {
    try {
      const response = await fetch(`${apiurl}getprojects`);
      const data = await response.json();
      
      return data;
    } catch (error) {
    }
  }

  export{
    sendWhaPC,
    getProyectos,
    getProyecto,
    getBanner
  }