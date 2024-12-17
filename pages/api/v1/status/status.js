function status(request, response) {
  response.status(200).json({ chave: "ola mundo" });
}

export default status;
