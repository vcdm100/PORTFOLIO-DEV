import { React, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Row, Col, Card, Input, Button, Icon } from 'react-materialize';
import UserProfile from '../../components/userProfile';


export default function Contact() {


    const serviceId = import.meta.env.VITE_REACT_APP_SERVICE_ID;
    const templateId = import.meta.env.VITE_REACT_APP_TEMPLATE_ID;
    const userId = import.meta.env.VITE_REACT_APP_USER_ID;    

    const form = useRef();

    const sendEmail = (e) => {

        e.preventDefault();

        emailjs.sendForm(
            serviceId,
            templateId,
            form.current,
            userId,
        ).then((result) => {
            console.log(result.text);
            alert("E-mail foi enviado com sucesso! Mensagem: " + result.text);
        }, (error) => {
            console.log(error.text);
            alert(error.text);
        });

    };


    return (
        <Row>

            <Col m={4} s={12}>
                <UserProfile />
            </Col>

            <Col m={8} s={12}>

                <h5>Entre em contato com o Victor Cláudio</h5>

                <Card>
                    <Row>
                        <form onSubmit={sendEmail} ref={form}>
                            <Input type="text" 
                            id="from_name" 
                            name="name" 
                            label="Nome: " 
                            s={12} 
                            placeholder="Digite o seu nome completo" 
                            icon={<Icon>person</Icon>} />

                            <Input type="email"
                            id="user_email"
                            name="email"
                            label="E-mail: "
                            s={12}
                            placeholder="Digite um e-mail válido"
                            icon={<Icon>email</Icon>} />

                            <Input type="text" 
                            id="phone" 
                            name="phone" 
                            label="Telefone: " 
                            s={12} 
                            placeholder="(xx) x xxxx-xxxx" 
                            icon={<Icon>phone</Icon>} />

                            <Input 
                            type="text" 
                            id="subject" 
                            name="subject" 
                            label="Assunto: " 
                            s={12} 
                            placeholder="Assunto" 
                            icon={<Icon>archive</Icon>} />

                            <Input type="text" 
                            id="message" 
                            name="message" 
                            placeholder="Digite sua mensagem..." 
                            label="Mensagem: " 
                            s={12} 
                            icon={<Icon>message</Icon>} />

                            <Col s={12} m={12}>

                            <Button type="submit"
                            name="submit" 
                            waves="light" 
                            floating className="right green accent-4" 
                            title="Enviar"
                            value="submit"
                            node="button">
                            <Icon>send</Icon></Button>   

                            <Button type="reset"
                            name="limpar" 
                            waves="light"
                            floating className="right red accent-4" 
                            title="Cancelar"
                            value="Limpar"
                            style={{ marginRight: '10px' }}>
                            <Icon>cancel</Icon></Button>
                            
                            </Col>
                        </form>
                    </Row>
                </Card>

            </Col>

        </Row>
    );
};
