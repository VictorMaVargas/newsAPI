import React from 'react';
import { useForm } from "react-hook-form";
import './Form.scss';

export default function Formulario() {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);
   
  return (
    
    <form className="formReact" onSubmit={handleSubmit(onSubmit)}>
      <h3>Crea una noticia</h3>
      <div className="fields">
        Autor <input {...register("author")}/>
        Título <input {...register("title")} />
        Descripción <input {...register("description")} />
        Contenido <input {...register("content")} />
        Imagen <input {...register("urlToImage")} />
      </div>
      <input className="boton" type="submit" />
    </form>
  );
}