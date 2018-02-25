import React from 'react'
import { Card, Typography } from 'material-ui'
import { CardContent, CardMedia } from 'material-ui/Card'
import defaultImage from '../../../../assets/default-image.jpg'

import './imovelCard.css'

const imovelCard = ({ imovel }) => (
  <div>
    <Card className='imovelCard__card'>
      <CardMedia
        className='imovelCard__card__image'
        image={ defaultImage }
        title='Contemplative Reptile'
      />
      <CardContent>
        <div className='imovelCard__card__header'>
          <Typography variant='headline' component='h2' className='imovelCard__card__titulo'>
            { `R$ ${imovel.aluguel},00` }
          </Typography>
          <Typography component='p' className='imovelCard__card__subTitulo'>
            { `(cond. R$ ${imovel.condominio},00)` }
          </Typography>
        </div>
        <Typography component='p'>
          { `${imovel.cidade}, ${imovel.endereco}.` }
        </Typography>
        <Typography component='p'>
          { `Dormitórios: ${imovel.dormitorios}`}
        </Typography>
        <Typography component='p'>
          { `Banheiros: ${imovel.banheiros}` }
        </Typography>
      </CardContent>
    </Card>
  </div>
)

export default imovelCard
