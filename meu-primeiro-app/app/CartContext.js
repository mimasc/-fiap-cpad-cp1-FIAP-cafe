import React, { createContext, useState } from 'react';

//Criação do contexto
export const CartContext = createContext();
export function CartProvider({ children }) {
  const [card, setCart] = useState([]);

//Função para adição dos itens
const addToCart = (item) => {
  setCart([...cart, item]);
  alert(`${item.nome} adicionado ao carrinho!`);
};

const total = cart.reduce((soma, item)) => soma + item.preco, 0);

return (
  <cartContext.Provider value={{ cart, addToCart, total }}>
      {children}
    </CartContext.Provider>
  );
}
