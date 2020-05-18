import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';


const Styles = styled.div`
	.navbar {
		background: #070000;
		background: -webkit-linear-gradient(to right, #070000, #4c0001, #070000);
		background: linear-gradient(to right, #070000, #4c0001, #070000);
	}
	a,
	.navbar-brand,
	.navbar-nav .nav-link {
		color: #bbb;
		&:hover {
			color: white;
		}
	}
	.logo {
		width: 10%;
	}
`;

export const NavigationBar = () => (
					<Styles>
						<Navbar expand='lg'>
							<Navbar.Brand href='/'>
								<img
									src='https://i.imgur.com/VSZL4JF.png'
									alt='logo'
									className='logo'
								/>
								Food Chat
							</Navbar.Brand>
							<Navbar.Toggle aria-controls='basic-navbar' />
							<Navbar.Collapse id='basic-navbar-nav'>
								<Nav className='ml-auto'>
									<Nav.Item>
										<Nav.Link href='/'>Home</Nav.Link>
									</Nav.Item>
									<Nav.Item>
										<Nav.Link href='/register'>Register</Nav.Link>
									</Nav.Item>
									<Nav.Item>
										<Nav.Link href='/login'>Login</Nav.Link>
									</Nav.Item>
								</Nav>
							</Navbar.Collapse>
						</Navbar>
					</Styles>
				);
