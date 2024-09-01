import React, { useState } from "react";
import Input from "../../Input";
import Button from "../../Button";
import { Container, ContainerForm, Form, Label } from "./styles";



const Cadastro = () => {
  return (
    <Container>
      <h2>Crie sua conta</h2>
      <p>Cadastre Agora!</p>
      <ContainerForm>
        <Form>
          <Label>Estabelecimento</Label>
          <Input
            type="text"
            name="empresaName"
            placeholder="Informe o nome da empresa"
          />
          <Label>CNPJ</Label>
          <Input
            type="text"
            name="cnpj"
            placeholder="Informe o cnpj da empresa"
          />
          <Label>E-mail</Label>
          <Input
            type="text"
            name="email"
            placeholder="Informe seu E-mail"
          />
          <Label>Senha</Label>
          <Input
            type="password"
            name="password"
            placeholder="Informe sua senha"
          />
          <Button type="submit">Fazer Login</Button>
        </Form>
      </ContainerForm>
    </Container>
  )
}

export default Cadastro;