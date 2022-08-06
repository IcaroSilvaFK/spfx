import * as React from 'react';
import { useState, useRef } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { BsCursorText } from 'react-icons/bs';
import { BiText } from 'react-icons/bi';
import { AiFillFileImage } from 'react-icons/ai';
import { TbSend } from 'react-icons/tb';
import { spfi } from '@pnp/sp';

import { getSP } from '../../pnpjs.config';
import { Header } from '../../components/Header';

import { Container, Form, Row, ContainerTextArea } from './styles';

interface IFormProps {
  title: string;
  description: string;
}

export function AddNewAnime(): React.ReactElement {
  const [isLoading, setIsLoading] = useState(false);
  const { register, handleSubmit, reset } = useForm<IFormProps>();
  const [imageBase64, setImageBase64] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const onSubmit: SubmitHandler<IFormProps> = async ({
    description,
    title,
  }) => {
    try {
      setIsLoading(true);
      const _sp = getSP();

      if (!_sp) return;

      const queryBuilder = spfi(_sp);

      await queryBuilder.web.lists.getByTitle('animes').items.add({
        Title: title,
        username: title,
        situation: description,
        anime_cover: JSON.stringify(inputRef.current.files),
      });
      reset();
      setImageBase64(null);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  function handleChangeImage(): void {
    const fileReader = new FileReader();

    fileReader.onload = () => {
      setImageBase64(fileReader.result as string);
    };
    fileReader.readAsDataURL(inputRef.current.files[0]);
  }

  return (
    <Container>
      <Header />
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Row>
          <BsCursorText size={22} />
          <input
            type='text'
            {...register('title')}
            placeholder='Digite o nome do anime...'
          />
        </Row>
        <ContainerTextArea>
          <BiText size={22} />
          <textarea
            name
            {...register('description')}
            placeholder='Descrição...'
          />
        </ContainerTextArea>
        <Row>
          <label htmlFor='image_cover'>
            {imageBase64 ? (
              <img src={imageBase64} alt='' />
            ) : (
              <AiFillFileImage size={22} color={imageBase64 && '#48BB78'} />
            )}

            <input
              type='file'
              id='image_cover'
              ref={inputRef}
              onChange={handleChangeImage}
            />
            <span>
              {imageBase64 ? 'Imagen selecionada' : 'Adicionar imagen'}
            </span>
          </label>
        </Row>
        <div>
          <button type='submit' disabled={isLoading}>
            <TbSend size={18} />
            Adicionar anime
          </button>
        </div>
      </Form>
    </Container>
  );
}
