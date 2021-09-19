import styled from 'styled-components'

export const FormsHome = styled.div`
display: flex;
justify-content: center;
align-itens: center;
form {
	display: flex;
	align-itens: center;
	width: 100%;
}

input {
	text-align:center;
	padding: 1.5rem;
	font-size:20px;
	width: 500px;
	outline: 0;
	border-radius: 0.5rem;
	}
`

export const Button = styled.button `
    text-align: center;
    padding: 1rem;
    margin: 0 1rem;
    background-color: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.background};
    border-radius: 13px;
    font-size: 20px;
    font-weight:bold;

    : hover{
	cursor: pointer;
	opacity: 80%;
}
`

export const List = styled.div`
margin-top: 5rem;
background: ${props => props.theme.colors.tab};


div {
	display: flex;
	justify-content: space-between;
	padding: 2rem 1rem;
	border-bottom: 1px solid;
	
}
`