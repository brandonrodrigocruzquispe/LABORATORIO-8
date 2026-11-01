
import { useState } from "react";
import AddCategory from "./componentes/AddCategory";
import GifGrid from "./componentes/GifGrid";

const GifExpertApp = () => {

    const [categorias, setCategorias] = useState(["One punch", "Valorant","Dragon Ball"]);

    // ["one punch", "naruto"]

    const onAddCategory = (newCategory) => {
        if (categorias.includes(newCategory)) return;
        setCategorias([newCategory, ...categorias ]);
    };

    return (
        <div>
            <h1>App de gifs</h1>

            <AddCategory onAddCategory={onAddCategory} />

            
            {categorias.map((categoria) => {
                return <GifGrid key={categoria} category={categoria} />
            })}

            
        </div>
    );
};

export default GifExpertApp;
