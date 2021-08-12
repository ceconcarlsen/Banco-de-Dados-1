import React from "react";
import data from "../../../data/products";
import { Link } from "react-router-dom";
import {
	Imagem,
	StyledProduto,
	StyledProdutoInfos,
	StyledButtonAdd,
} from "./style";

const Produto = (props) => {
	const { produto, handleAdd } = props;
	return (
		<StyledProduto>
			<li key={produto._id}>
				<Link to={"/produto/" + produto._id}>
					<Imagem>
						<img src={process.env.PUBLIC_URL + produto.image} />
					</Imagem>
				</Link>
				<StyledProdutoInfos>
					<Link to={"/produto/" + produto._id}>{produto.nome}</Link>
					<div>{produto.marca}</div>
					<div>R$ {produto.preco}</div>
					<StyledButtonAdd onClick={() => handleAdd(produto)}>
						ADD +{" "}
					</StyledButtonAdd>
				</StyledProdutoInfos>
			</li>
		</StyledProduto>
	);
};

export default Produto;
