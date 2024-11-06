import React, { useState, useEffect } from 'react';
import styles from './RecipeForm.module.css'; // Importa los estilos

const RecipeForm = () => {
  // Estado inicial del formulario con los campos de la receta
  const [recipe, setRecipe] = useState({
    nombre: '',
    descripcion: '',
    ingredientes: [{ nombre: '', cantidad: '' }], // Inicializa con un ingrediente vacío
    instrucciones: [''], // Lista de instrucciones
    tiempoPreparacion: '',
    tiempoCoccion: '',
    tiempoTotal: '', // Campo para el tiempo total
    dificultad: '',
    porciones: '',
    categoria: '',
    etiquetas: '',
    foto: null,
    video: '',
    calorias: '',
    proteinas: '',
    grasas: '',
    carbohidratos: '',
    valoracion: '',
    notasCocinero: '', // Notas adicionales
  });

  // Efecto para calcular automáticamente el tiempo total
  useEffect(() => {
    const total = parseInt(recipe.tiempoPreparacion || 0) + parseInt(recipe.tiempoCoccion || 0);
    setRecipe((prevRecipe) => ({
      ...prevRecipe,
      tiempoTotal: total ? total : '', // Suma de tiempo de preparación y cocción
    }));
  }, [recipe.tiempoPreparacion, recipe.tiempoCoccion]);

  // Maneja el cambio de valor de los campos de entrada
  const handleChange = (e) => {
    const { name, value } = e.target; // Desestructura el evento
    setRecipe({ ...recipe, [name]: value }); // Actualiza el estado de la receta
  };

  // Maneja el cambio de ingredientes
  const handleIngredientChange = (index, e) => {
    const { name, value } = e.target; // Desestructura el evento
    const updatedIngredients = [...recipe.ingredientes]; // Crea una copia del array de ingredientes
    updatedIngredients[index][name] = value; // Actualiza el ingrediente correspondiente
    setRecipe({ ...recipe, ingredientes: updatedIngredients }); // Actualiza el estado
  };

  // Maneja el cambio de instrucciones
  const handleInstructionChange = (index, e) => {
    const { value } = e.target;  // Obtiene el valor del input
    const updatedInstructions = [...recipe.instrucciones]; // Crea una copia del array de ingredientes
    updatedInstructions[index] = value;  // Actualiza el paso correspondiente
    setRecipe({ ...recipe, instrucciones: updatedInstructions }); // Actualiza el estado
  };
 
  // Agrega una nueva instrucción (paso)
  const addInstruction = () => {
    setRecipe({
      ...recipe,
      instrucciones: [...recipe.instrucciones, ''], // Añade un paso vacío al array
    });
  };

   // Agrega un nuevo ingrediente
  const addIngredient = () => {
    setRecipe({
      ...recipe,
      ingredientes: [...recipe.ingredientes, { nombre: '', cantidad: '' }], // Añade un ingrediente vacío
    });
  };

  // Maneja el cambio del archivo de imagen  
  const handleFileChange = (e) => {
    setRecipe({ ...recipe, foto: e.target.files[0] }); // Actualiza el estado con la imagen seleccionada
  };

  // Maneja el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault(); // Previene el comportamiento por defecto del formulario
    console.log('Receta enviada:', recipe); // Muestra la receta en la consola
  };

  return (
    <div className={styles.paddingTop_custom}>
      <form className={styles.formContainer} onSubmit={handleSubmit}>
        <h2 className={styles.formTitle}>Crear Receta</h2>

        <div className={styles.formGroup}>
          <label>Nombre de la Receta:</label>
          <input type="text" name="nombre" value={recipe.nombre} onChange={handleChange} required />
        </div>

        <div className={styles.formGroup}>
          <label>Descripción Breve:</label>
          <textarea name="descripcion" value={recipe.descripcion} onChange={handleChange} required></textarea>
        </div>

        <div className={styles.formGroup}>
          <label>Lista de Ingredientes:</label>
          {recipe.ingredientes.map((ing, index) => (
            <div key={index} className={styles.ingredientGroup}>
              <input
                type="text"
                name="nombre"
                placeholder="Ingrediente"
                value={ing.nombre}
                onChange={(e) => handleIngredientChange(index, e)}
                required
              />
              <input
                type="text"
                name="cantidad"
                placeholder="Cantidad"
                value={ing.cantidad}
                onChange={(e) => handleIngredientChange(index, e)}
                required
              />
            </div>
          ))}
          <button type="button" onClick={addIngredient} className={styles.buttonAddIngredient}>
            Añadir Ingrediente
          </button>
        </div>

        <div className={styles.formGroup}>
          <label>Instrucciones (Paso a Paso):</label>
          {recipe.instrucciones.map((step, index) => (
            <div key={index} className={styles.stepGroup}>
              <label>Paso {index + 1}:</label>
              <input
                type="text"
                name={`instruccion${index}`}
                placeholder="Escribe el paso de la receta"
                value={step}
                onChange={(e) => handleInstructionChange(index, e)}
                required
              />
            </div>
          ))}
          <button type="button" onClick={addInstruction} className={styles.buttonAddStep}>
            Añadir Paso
          </button>
        </div>

        <div className={styles.formGroup}>
          <label>Tiempo de Preparación (minutos):</label>
          <input type="number" name="tiempoPreparacion" value={recipe.tiempoPreparacion} onChange={handleChange} required />
        </div>

        <div className={styles.formGroup}>
          <label>Tiempo de Cocción (minutos):</label>
          <input type="number" name="tiempoCoccion" value={recipe.tiempoCoccion} onChange={handleChange} required />
        </div>

        <div className={styles.formGroup}>
          <label>Tiempo Total (minutos):</label>
          <input type="number" name="tiempoTotal" value={recipe.tiempoTotal} readOnly />
        </div>

        <div className={styles.formGroup}>
          <label>Porciones (cantidad de personas):</label>
          <input type="number" name="porciones" value={recipe.porciones} onChange={handleChange} required />
        </div>

        <div className={styles.formGroup}>
          <label>Nivel de Dificultad:</label>
          <select name="dificultad" value={recipe.dificultad} onChange={handleChange} required>
            <option value="facil">Fácil</option>
            <option value="medio">Medio</option>
            <option value="dificil">Difícil</option>
          </select>
        </div>

        <div className={styles.formGroup}>
          <label>Categoría de la Receta:</label>
          <select name="categoria" value={recipe.categoria} onChange={handleChange} required>
            <option value="">Selecciona una categoría</option>
            <option value="entrada">Entrada</option>
            <option value="plato_principal">Plato Principal</option>
            <option value="postre">Postre</option>
            <option value="bebida">Bebida</option>
          </select>
        </div>

        <div className={styles.formGroup}>
          <label>Etiquetas:</label>
          <input type="text" name="etiquetas" value={recipe.etiquetas} onChange={handleChange} placeholder="Vegano, Sin gluten, etc." required />
        </div>

        <div className={styles.formGroup}>
          <label>Enlace a Video (opcional):</label>
          <input type="url" name="video" value={recipe.video} onChange={handleChange} placeholder="https://..." />
        </div>

        <div className={styles.formGroup}>
          <label>Foto de la Receta:</label>
          <input type="file" name="foto" onChange={handleFileChange} required />
          {recipe.foto && (
            <div className={styles.formPhoto}>
              <img src={URL.createObjectURL(recipe.foto)} alt="Vista previa" />
            </div>
          )}
        </div>

        <div className={styles.formGroup}>
          <label>Notas Adicionales:</label>
          <textarea
            name="notasCocinero"
            value={recipe.notasCocinero}
            onChange={handleChange}
            placeholder="Comentarios o sugerencias especiales para la receta (opcional)"
          />
        </div>

        <button type="submit" className={styles.buttonSubmit}>Agregar Receta</button>
      </form>
    </div>
  );
};

export default RecipeForm;