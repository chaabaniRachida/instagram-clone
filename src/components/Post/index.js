import React from 'react'
import styled from 'styled-components'
import Username from '../Username'
import Avatar from '../Avatar'
import Picture from '../Picture'
import Caption from '../Caption'


const FakeData = [
  {
    name: 'Patick Bruel',
    urlAvatar:
      'https://www.nj.com/resizer/zovGSasCaR41h_yUGYHXbVTQW2A=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/SJGKVE5UNVESVCW7BBOHKQCZVE.jpg',
    urlImage:
      'https://mp-prod-de-medialib.s3-eu-central-1.amazonaws.com/motivwelt/milieu/fenster-betonwand-frontal/naturbild/4-3/no-frame/naturbild-xl.jpg',
    captionName: 'Jean Claude',
    captionComment: "Bonjour c'est beau"
  },
  {
    name: 'Brad Pitt',
    urlAvatar:
      'https://img.favpng.com/20/10/12/brad-pitt-cartoon-clip-art-png-favpng-DUPkb832VszGJeMXt3QHL5k5Z.jpg',
    urlImage:
      'https://resize.programme-television.ladmedia.fr/r/670,670/img/var/premiere/storage/images/tele-7-jours/news-tv/brad-pitt-s-affiche-avec-sa-nouvelle-petite-amie-en-france-qui-est-elle-4662368/99230654-1-fre-FR/Brad-Pitt-s-affiche-avec-sa-nouvelle-petite-amie-en-France-qui-est-elle.jpg',
    captionName: 'Brad Pitt',
    captionComment: "Here I am"
  },
  {
    name: 'Sarra Michel',
    urlAvatar:
      'https://previews.123rf.com/images/juliasart/juliasart1704/juliasart170400022/75406270-vecteur-ic%C3%B4ne-fille-avatar-femme-ic%C3%B4ne-de-visage-style-de-bande-dessin%C3%A9e-.jpg',
    urlImage:
      'https://mp-prod-de-medialib.s3-eu-central-1.amazonaws.com/motivwelt/milieu/fenster-betonwand-frontal/naturbild/4-3/no-frame/naturbild-xl.jpg',
    captionName: 'Sarra Michel',
    captionComment: "Hello word!"
  },
  {
    name: 'Angelina Jolie',
    urlAvatar:
      'https://avatarfiles.alphacoders.com/880/thumb-88081.jpg',
    urlImage:
      'https://file1.grazia.fr/var/grazia/storage/images/1/2/6/0/6/12606917/angelina-jolie.jpg?alias=original',
    captionName: 'Angelina',
    captionComment: "Im alive "
  }

]
const Post = props => {
  return (
    
    <div>
      {FakeData.map(data => {
        return (
        <PostContainer>
          <PostHeader >
            <Username name={data.name} />
            <Avatar url={data.urlAvatar}/>
          </PostHeader>
          <PostBodyPhoto>
            <Picture url={data.urlImage}></Picture>
          </PostBodyPhoto>
          <PostBodyCaption>
            <Caption nom={data.captionName} caption={data.captionComment}/>
          </PostBodyCaption>
        </PostContainer>
      )})}
    </div>
  )
}



const PostContainer = styled.div`
  align-items: center;
  padding: 20px;
  max-width: 700px;
  border: 1px solid lightgray;
  margin-bottom: 50px;
`
const PostHeader = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  margin-bottom: 10px; 
`
const PostBodyPhoto = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  margin-bottom: 10px; 
`
const PostBodyCaption = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  margin-bottom: 10px; 
  max-width: 700px;
`
export default Post