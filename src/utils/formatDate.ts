export   function FNCreateDataPtBR(dataString: string) {
    const data = new Date(dataString);

    const dataFormatada = data.toLocaleDateString("pt-BR", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    });
    return dataFormatada;
  }