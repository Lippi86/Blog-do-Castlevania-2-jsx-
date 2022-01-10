import React from "react";
import {
Box,
Container,
} from "./footerStyles";

import { format } from 'date-fns';




const Footer = () => {

	const today = new Date();
	const formattedDate = format(today, 'dd.MM.yyyy');

	
	

return (
	<Box>
	<span style= {{color: "red", fontSize: 15, textAlign: "left"}}>{formattedDate}</span>
	<h1 style={{ color: "red",
				textAlign: "right",
				fontSize: 15,
				marginTop: "-20px" }}>
		Autor: Filippi Fernandes de S. Sgreccia
	</h1>
	<Container>	
	</Container>
	</Box>
);
};
export default Footer;
