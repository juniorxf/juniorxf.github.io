import axiosInstance from './axiosInstance';

export async function sendWhatsAppMessage(messageText: string): Promise<boolean> {
  const payload = {
    // sessionName: "Corretor",
    instanceName: "Corretor",
    // contacts: [{ number: "556299957980", nome_inicial: "José", nome_completo: "José Freitas" }],
    number: "556299957980",
    // message: messageText
    text: messageText
  };

  try {
    // const result = await axiosInstance.post('/api/send-pers-message', payload);
    const result = await axiosInstance.post('/api/whats-evo/send-text', payload);
    // return result.status === 200;
    return result.status === 201;
  } catch (error) {
    console.error("Erro ao enviar mensagem:", error);
    return false;
  }
}
