import React, { useState } from 'react';
import './styles.css'; // Assegure-se de importar o arquivo de estilos

const AddressForm = ({ onSubmit }) => {
    const [address, setAddress] = useState({
        name: '',
        street: '',
        number: '',
        neighborhood: '',
        reference: '',
        contact: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setAddress((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(address); // Envia o endereço preenchido para o componente pai
    };

    return (
        

        <form onSubmit={handleSubmit} className="address-form">
    
            
            <h2>Endereço de Entrega</h2>
            <div className="form-group">
                <label htmlFor="name">Nome</label>
                <input
                    id="name"
                    type="text"
                    name="name"
                    value={address.name}
                    onChange={handleChange}
                    required
                    className="form-input"
                />
            </div>
            <div className="form-group">
                <label htmlFor="street">Rua</label>
                <input
                    id="street"
                    type="text"
                    name="street"
                    value={address.street}
                    onChange={handleChange}
                    required
                    className="form-input"
                />
            </div>
            <div className="form-group">
                <label htmlFor="number">Número</label>
                <input
                    id="number"
                    type="text"
                    name="number"
                    value={address.number}
                    onChange={handleChange}
                    required
                    className="form-input"
                />
            </div>
            <div className="form-group">
                <label htmlFor="neighborhood">Bairro</label>
                <input
                    id="neighborhood"
                    type="text"
                    name="neighborhood"
                    value={address.neighborhood}
                    onChange={handleChange}
                    required
                    className="form-input"
                />
            </div>
            <div className="form-group">
                <label htmlFor="reference">Ponto de Referência</label>
                <input
                    id="reference"
                    type="text"
                    name="reference"
                    value={address.reference}
                    onChange={handleChange}
                    className="form-input"
                />
            </div>
            <div className="form-group">
                <label htmlFor="contact">Contato</label>
                <input
                    id="contact"
                    type="text"
                    name="contact"
                    value={address.contact}
                    onChange={handleChange}
                    required
                    className="form-input"
                />
            </div>
            <button type="submit" className="submit-btn">Salvar Endereço</button>
        </form>
    );
};

export default AddressForm;

