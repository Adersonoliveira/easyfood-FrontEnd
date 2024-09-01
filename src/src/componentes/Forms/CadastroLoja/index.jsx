import {Fragment} from "react";
import {Container, Label} from "./styles";


const Form = () => {
  return (
    <Container>
      <h2>Acesse sua conta</h2>
      <p>Entre com seu e-mail e senha!</p>
      <ContainerForm>
        <Form onSubmit={handleLogin} autoComplete="off">
          <Label>E-mail</Label>
          <Input
            type="text"
            name="email"
            placeholder="Informe seu E-mail"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Label>Senha</Label>
          <Input
            type="password"
            name="password"
            placeholder="Informe sua senha"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit">Fazer Login</Button>
        </Form>
      </ContainerForm>
    </Container>
  )
}

export default Form;