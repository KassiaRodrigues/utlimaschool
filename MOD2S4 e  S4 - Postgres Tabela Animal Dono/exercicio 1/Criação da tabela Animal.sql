-- Table: public.Animal

-- DROP TABLE IF EXISTS public."Animal";

CREATE TABLE IF NOT EXISTS public."Animal"
(
    codanimal bigint NOT NULL DEFAULT nextval('"Animal_codanimal_seq"'::regclass),
    nome character varying COLLATE pg_catalog."default" NOT NULL,
    especie character varying COLLATE pg_catalog."default",
    sexo "char",
    "cor " character varying COLLATE pg_catalog."default",
    coddono bigint,
    CONSTRAINT "Animal_pkey" PRIMARY KEY (codanimal),
    CONSTRAINT coddono FOREIGN KEY (coddono)
        REFERENCES public."Dono" (coddono) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public."Animal"
    OWNER to postgres;
-- Index: fki_coddono

-- DROP INDEX IF EXISTS public.fki_coddono;

CREATE INDEX IF NOT EXISTS fki_coddono
    ON public."Animal" USING btree
    (coddono ASC NULLS LAST)
    TABLESPACE pg_default;