import axiosInstance from './axiosInstance';

export async function sendWhatsAppMessage(messageText: string): Promise<boolean> {
  const payload = {
    sessionName: "corretor",
    contacts: [{
      number: "556299957980",
      nome_inicial: "José",
      nome_completo: "José Freitas"
    }],
    message: messageText
  };

  try {
    const result = await axiosInstance.post('/api/send-pers-message', payload);
    return result.status === 200;
  } catch (error) {
    console.error("Erro ao enviar mensagem:", error);
    return false;
  }
}
