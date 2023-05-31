import Tarjet from './Tarjet';

const ListaUsuarios = ({ users, cambiarActivo }) => {
	return (
		<>
			{users.map(({ name, login, picture, activo }) => (
				<Tarjet
					key={login.uuid}
					id={login.uuid}
					name={`${name.first} ${name.last}`}
					photo={picture.large}
					activo={activo}
					cambiarActivo={cambiarActivo}
				/>
			))}
		</>
	);
};

export default ListaUsuarios;