-- Table: public.Dono

-- DROP TABLE IF EXISTS public."Dono";

CREATE TABLE IF NOT EXISTS public."Dono"
(
    coddono bigint NOT NULL DEFAULT nextval('"Dono_coddono_seq"'::regclass),
    nome character varying COLLATE pg_catalog."default",
    bairro character varying COLLATE pg_catalog."default",
    CONSTRAINT "Dono_pkey" PRIMARY KEY (coddono)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public."Dono"
    OWNER to postgres;