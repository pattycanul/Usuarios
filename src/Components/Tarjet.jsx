import './Tarjet.css';

function Tarjet({
	id,
	name = 'Unkwnow',
	size = '',
	photo,
	activo,
	cambiarActivo,
}) {
	const changeStatus = (id) => {
		cambiarActivo(id);
	};
	let className = activo ? '' : ' deshabilitado ';

	className +=
		size === 'small'
			? 'is-small'
			: size === 'large'
			? 'is-large'
			: '';

	return (
		<article class='card'>
			<picture>
				{id ? (
					<img
						onClick={() => changeStatus(id)}
						src={photo}
						class={'condition-img' + className}
						alt=''
					/>
				) : (
					<img
						src='https://cuv.upc.edu/es/shared/imatges/fotos-professorat-i-professionals/anonimo.jpg'
						alt=''
					/>
				)}
				<h3>
					{activo ? name : 'Disable'}
				</h3>
			</picture>
		</article>
	);
}

export default Tarjet;