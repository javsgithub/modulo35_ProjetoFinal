import Button from '../Button'
import Tag from '../Tag'
import * as S from './styles'
import { Place } from '../../pages/Home'

import estrela from '../../assets/images/estrela.png'

const Restaurant = ({
  id,
  capa,
  titulo,
  avaliacao,
  descricao,
  destacado,
  tipo,
  cardapio
}: Place) => {
  const returnPath = () => {
    if (id === 1) {
      return `/Bella_Tavola_Italiana/${id}`
    } else if (id === 2) {
      return `/Casa_das_Delícias_Árabe/${id}`
    } else if (id === 3) {
      return `/Sakura_Sushi_House/${id}`
    } else if (id === 4) {
      return `/Cantinho_Lusitano/${id}`
    } else if (id === 5) {
      return `/Piazza_del_Fornot/${id}`
    } else {
      return `/Jardim_da_Terra/${id}`
    }
  }

  const textLimit = () =>
    descricao.length > 248 ? `${descricao.slice(0, 248) + '...'}` : descricao

  return (
    <S.RestaurantContainer>
      <img src={capa} alt={titulo} />
      <S.InfoTags>
        {destacado === true ? (
          <>
            <Tag>Destaque da semana</Tag>
            <Tag>{tipo}</Tag>
          </>
        ) : (
          <Tag>{tipo}</Tag>
        )}
      </S.InfoTags>
      <div className="info">
        <div className="title-rate">
          <S.Title>{titulo}</S.Title>
          <S.RateContainer>
            <span>{avaliacao}</span>
            <img src={estrela} alt="estrela" />
          </S.RateContainer>
        </div>
        <S.Description>{textLimit()}</S.Description>
        <Button
          type="link"
          to={returnPath()}
          title="Clique para ver as opções deste restaurante"
          width="82px"
          size="small"
          cardapio={cardapio}
        >
          Saiba mais
        </Button>
      </div>
    </S.RestaurantContainer>
  )
}

export default Restaurant
