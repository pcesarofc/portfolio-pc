import React from "react";
import emailjs from 'emailjs-com';
import $ from 'jquery';
import Button1 from '../../Button1';

const Form = () => {

    function enviarEmail(e) {
        e.preventDefault();

        if (e.target[0].value === "") {
            $('#nome').css("border-bottom", "2px solid red");
        } else {
            $('#nome').css("border-bottom", "none")
        }

        if (e.target[1].value === "") {
            $('#email').css("border-bottom", "2px solid red");
        } else {
            $('#email').css("border-bottom", "none")
        }

        if (e.target[2].value === "") {
            $('#mensagem').css("border-bottom", "2px solid red");
        } else {
            $('#mensagem').css("border-bottom", "none")
        }

        if ((e.target[0].value === "") || (e.target[1].value === "") || (e.target[2].value === "")) {
            alert("Preencha todos os dados corretamente!");
        }

        if ((e.target[0].value !== "") && (e.target[1].value !== "") && (e.target[2].value !== "")) {
            emailjs.sendForm('service_4xqrasr', 'template_aywpg12', e.target, 'h9K5h7jr1DnkwoBe4').then(res => {
                alert("Seu email foi enviado com sucesso!");
            })

            $('#nome').css("border-bottom", "none")
            $('#email').css("border-bottom", "none")
            $('#mensagem').css("border-bottom", "none")
        }

    }

    return <div className="form-container">
        <h1>Contato</h1>
        <hr />
        <form onSubmit={enviarEmail}>
            <input type="text" className="form-control" id="nome" name="nome" placeholder="Nome" autoComplete="off" />
            <input type="text" className="form-control" id="email" name="email" placeholder="Email" autoComplete="off" />
            <textarea type="text" className="form-control" id="mensagem" name="mensagem" placeholder="Mensagem" />
            <Button1 text="ENVIAR" />
        </form>
    </div>
}

export default Form;