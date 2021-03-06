PGDMP         )                y            pruebaApiRest    10.16    10.16                0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                       false                       0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                       false            	           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                       false            
           1262    16393    pruebaApiRest    DATABASE     ?   CREATE DATABASE "pruebaApiRest" WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'Spanish_Colombia.1252' LC_CTYPE = 'Spanish_Colombia.1252';
    DROP DATABASE "pruebaApiRest";
             postgres    false                        2615    2200    public    SCHEMA        CREATE SCHEMA public;
    DROP SCHEMA public;
             postgres    false                       0    0    SCHEMA public    COMMENT     6   COMMENT ON SCHEMA public IS 'standard public schema';
                  postgres    false    4                        3079    12924    plpgsql 	   EXTENSION     ?   CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;
    DROP EXTENSION plpgsql;
                  false                       0    0    EXTENSION plpgsql    COMMENT     @   COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';
                       false    1                        3079    16397 	   uuid-ossp 	   EXTENSION     ?   CREATE EXTENSION IF NOT EXISTS "uuid-ossp" WITH SCHEMA public;
    DROP EXTENSION "uuid-ossp";
                  false    4                       0    0    EXTENSION "uuid-ossp"    COMMENT     W   COMMENT ON EXTENSION "uuid-ossp" IS 'generate universally unique identifiers (UUIDs)';
                       false    2            ?            1259    16442 	   preguntas    TABLE     ^   CREATE TABLE public.preguntas (
    id integer NOT NULL,
    descripcion character varying
);
    DROP TABLE public.preguntas;
       public         postgres    false    4            ?            1259    16440    preguntas_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.preguntas_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 '   DROP SEQUENCE public.preguntas_id_seq;
       public       postgres    false    4    198                       0    0    preguntas_id_seq    SEQUENCE OWNED BY     E   ALTER SEQUENCE public.preguntas_id_seq OWNED BY public.preguntas.id;
            public       postgres    false    197            ?            1259    16628 
   respuestas    TABLE     ?   CREATE TABLE public.respuestas (
    id integer NOT NULL,
    descripcion character varying,
    correcta text NOT NULL,
    id_res integer
);
    DROP TABLE public.respuestas;
       public         postgres    false    4            ?            1259    16626    respuestas_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.respuestas_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public.respuestas_id_seq;
       public       postgres    false    4    200                       0    0    respuestas_id_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public.respuestas_id_seq OWNED BY public.respuestas.id;
            public       postgres    false    199            ?
           2604    16445    preguntas id    DEFAULT     l   ALTER TABLE ONLY public.preguntas ALTER COLUMN id SET DEFAULT nextval('public.preguntas_id_seq'::regclass);
 ;   ALTER TABLE public.preguntas ALTER COLUMN id DROP DEFAULT;
       public       postgres    false    197    198    198            ?
           2604    16631    respuestas id    DEFAULT     n   ALTER TABLE ONLY public.respuestas ALTER COLUMN id SET DEFAULT nextval('public.respuestas_id_seq'::regclass);
 <   ALTER TABLE public.respuestas ALTER COLUMN id DROP DEFAULT;
       public       postgres    false    199    200    200                      0    16442 	   preguntas 
   TABLE DATA               4   COPY public.preguntas (id, descripcion) FROM stdin;
    public       postgres    false    198                    0    16628 
   respuestas 
   TABLE DATA               G   COPY public.respuestas (id, descripcion, correcta, id_res) FROM stdin;
    public       postgres    false    200   I                  0    0    preguntas_id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public.preguntas_id_seq', 50, true);
            public       postgres    false    197                       0    0    respuestas_id_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public.respuestas_id_seq', 81, true);
            public       postgres    false    199            ?
           2606    16450    preguntas preguntas_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public.preguntas
    ADD CONSTRAINT preguntas_pkey PRIMARY KEY (id);
 B   ALTER TABLE ONLY public.preguntas DROP CONSTRAINT preguntas_pkey;
       public         postgres    false    198            ?
           2606    16636    respuestas respuestas_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public.respuestas
    ADD CONSTRAINT respuestas_pkey PRIMARY KEY (id);
 D   ALTER TABLE ONLY public.respuestas DROP CONSTRAINT respuestas_pkey;
       public         postgres    false    200            ?
           2606    16637 !   respuestas respuestas_id_res_fkey    FK CONSTRAINT     ?   ALTER TABLE ONLY public.respuestas
    ADD CONSTRAINT respuestas_id_res_fkey FOREIGN KEY (id_res) REFERENCES public.preguntas(id) ON UPDATE CASCADE ON DELETE CASCADE;
 K   ALTER TABLE ONLY public.respuestas DROP CONSTRAINT respuestas_id_res_fkey;
       public       postgres    false    198    2692    200               4   x?36?,NU??I?MLJ?2???+M-2,9???L8S??2??b???? 9??         8   x?3???+M-K?I????45??0?L-BN?|Nc.C????D?Ē+F??? o*?     