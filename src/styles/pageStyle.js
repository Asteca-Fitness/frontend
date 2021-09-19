import styled from 'styled-components'

export const HeaderPage = styled.div`
display: flex;
position: fixed;
top: 0;
justify-content: space-between;
padding: 1rem;
background: ${props => props.theme.colors.tab};
width: 100%;
text-align: center;
ul {
	list-style: none;
	display: flex;
	justify-content: center;
}
h1 {
	color: ${props => props.theme.colors.primary};
}
li {
	padding: 1rem;
}
li:hover{
	cursor: pointer;
	color: ${props => props.theme.colors.primary};
}
`
export const FooterPage = styled.div`
bottom: 0;
position: absolute;
display: flex;
max-width:1440;
width:100%;
background-color:${props => props.theme.colors.primary};;
`

export const PageContent = styled.div`
width: 100vw;
justify-content: center;
margin-top: 10rem;
display: grid;
<<<<<<< HEAD
=======
grid-template-columns:100%;
font-family:'Open Sans', sans-serif;

`
export const FormsHome = styled.div`

input{
	
	margin-left:6%;
	text-align:center;
	width:45%;
	height: 77px;
	font-size:20px;
	font-weight:bold;
	
	
	}
	button{
		margin-left:2%;
		text-align:center;
		width:17%;
		height:70px;
		background-color: ${props => props.theme.colors.primary};
		color: white;
		border-radius: 13px;
		font-size:20px;
		font-weight:bold;
	}

button:hover{
	cursor:pointer;
}
`

export const Login = styled.div`
	margin: 0 auto;
	width: 45%;
	height:376px;
	background-color:${props => props.theme.colors.text};
	border:1px solid black;
	color:white;
	
	.login__titulo > h1{
		color:white;
		font-weight:normal;
		font-size:30px;
		text-align:center;
		padding:8px;
	}
	.login__forms_input div{
		border-bottom:1px solid black;
		width:80%;
		margin: 30px auto;
	}
	.login__forms_input label{
		color:white;
		font-size:30px;
		font-family: 'Open Sans', sans-serif;
		font-weight:normal;
		padding-left: 8px;

	}

	.login__forms_input input{
		background-color: ${props => props.theme.colors.text};
		border: 0;
		outline:0;
		color:white;
		font-size:16px;
		font-family: 'Open Sans', sans-serif;
		font-weight:normal;
		margin-left: 8px;
		width:65%;
	

	}
	#senha{
		padding-left:18px;
	}

	input:active{
		border:0;
		outline:0;
		background-color:${props => props.theme.colors.text};
	}

	.login__checkbox{
		margin: 10px 10%;
	}
	.login__checkbox label{
		margin-left: 10px;
	}
	.login__footer{
		height:8px;
		text-align:center;

	}


	button{
		width:50%;
		height: 50px;
		margin-top:50px;
		text-align:center;
		border-radius: 25px;
		font-size: 20px;

	

	}
	button:hover{
		cursor:pointer;
	

	}
`

export const PainelPrincipal = styled.div`

.section{
	max-width:205px;;
	max-height:273px;
	height:auto;
	padding:8% 5%;
	background-color:silver;
	text-align:center;
	margin:0 auto;
	

}
#codigo-painel{

	display:block;
	margin:35px auto;
	width:30%;
	height:auto;
	padding:15px 0; 
	text-align:center;
	font-size:24px;
	color:silver;
	outline:0;
}

.button-painel{
	display:block;
	text-align:center;
	width:17%;
	height:70px;
	background-color: ${props => props.theme.colors.primary};
	color: white;
	border-radius: 13px;
	font-size:20px;
	font-weight:bold;
	margin:0 auto;
}
>>>>>>> 401a03303fa3187b0469f7c22685bddbc16ba77a
`