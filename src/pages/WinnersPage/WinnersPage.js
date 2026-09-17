import { useEffect, useMemo, useState } from "react";
import { useSectionNav } from "../../utils/navigation";
import { useViewport } from "../../context/ViewportContext";

import Papa from "papaparse";

import "primereact/resources/themes/lara-dark-pink/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";

import Footer from "../../components/Footer/Footer";
import winnersCsvUrl from "../../utils/B2S-2026-Winners.csv";
import bgImage from "../../assets/faqsPage/desktop/faqs-bckg.png";
import image2 from "../../assets/premiosPage/desktop/premios-flechas.png";

import tituloEpicas from "../../assets/WinnersPage/WinnersPage-TitleD.png";
import bgImageM from "../../assets/faqsPage/mobil/faqs-bckg.png";
import tituloEpicasM from "../../assets/WinnersPage/WinnersPage-TitleM.png";

import image3 from "../../assets/mainPage/inicio/desktop/img_chica.png";
import image4 from "../../assets/mainPage/inicio/desktop/img_ghost.png";
import texture6 from "../../assets/faqsPage/desktop/texture-6.png";
import texture5 from "../../assets/WinnersPage/Logo_Azul.png";

import "./WinnersPage.css";

const RARITY_INFO = {
  Mythic: { label: "Mítica", accent: "#E44968" },
  Legendary: { label: "Legendaria", accent: "#FF9000" },
  Epic: { label: "Épica", accent: "#8A09E7" },
};

const RarityBadge = ({ value }) => {
  const info = RARITY_INFO[value];
  return (
    <span
      className="winners-page__badge"
      style={{ "--badge-accent": info?.accent ?? "#888" }}
    >
      {info?.label ?? value}
    </span>
  );
};

const WinnersPage = () => {
  const { isMobile } = useViewport();
  const [rows, setRows] = useState([]);
  const [status, setStatus] = useState("loading"); // loading | ready | error
  const [search, setSearch] = useState("");
  const [rarityFilter, setRarityFilter] = useState(null);
  const goToSection = useSectionNav();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    let cancelled = false;

    fetch(winnersCsvUrl)
      .then((res) => res.text())
      .then((text) => {
        if (cancelled) return;
        const { data } = Papa.parse(text, {
          header: true,
          skipEmptyLines: true,
        });
        setRows(data.filter((row) => row.User));
        setStatus("ready");
      })
      .catch(() => {
        if (!cancelled) setStatus("error");
      });

    return () => {
      cancelled = true;
    };
  }, []);

  const rarityOptions = useMemo(() => {
    const seen = new Set(rows.map((row) => row.Rarirty).filter(Boolean));
    return Object.keys(RARITY_INFO)
      .filter((key) => seen.has(key))
      .map((key) => ({ value: key, label: RARITY_INFO[key].label }));
  }, [rows]);

  const filteredRows = useMemo(() => {
    const term = search.trim().toLowerCase();
    return rows.filter((row) => {
      if (rarityFilter && row.Rarirty !== rarityFilter) return false;
      if (!term) return true;
      return (
        row.User?.toLowerCase().includes(term) ||
        row.Item?.toLowerCase().includes(term)
      );
    });
  }, [rows, search, rarityFilter]);

  return (
    <>
      <div
        className="winners-page"
        style={{
          "--bg-desktop": `url(${bgImage})`,
          "--bg-mobile": `url(${bgImageM})`,
        }}
      >


        <div className="premios-back-button-container">
          <img
            src={image2}
            alt="Regresar"
            className="premios-back-button"
            onClick={() => goToSection("inicio")}
          />
        </div>
        <div className="winners-page__hero container">
          <img
            src={!isMobile ? tituloEpicas : tituloEpicasM}
            alt="Ganadores"
            className="winners-page__hero-image"
          />
        </div>
        {!isMobile && (
          <>
            {" "}
            <div className="premios-section__home-girl-container" style={{ top: "100%", zIndex: 10 }}>
              <img
                src={image3}
                className="premios-section__home-girl"
                
                alt="Home Girl"
                loading="lazy"
              />
            </div>
            <img
              src={image4}
              className="premios-section__home-ghost"
              style={{ top: "55%", zIndex: 10 }}
              alt="Home Ghost"
              loading="lazy"
            />
          </>
        )}

                <div className="winners-page__texture">
          <img src={texture6} alt="Texture" />
        </div>

                <div className="winners-page__texture2">
          <img src={texture5} alt="Texture" />
        </div>

        <div className="winners-page__content container">
          {status === "error" && (
            <p className="winners-page__status winners-page__status--error">
              No pudimos cargar la lista de ganadores. Intenta recargar la
              página.
            </p>
          )}


          {status !== "error" && (
            <>
              <div className="winners-page__toolbar">
                <span className="p-input-icon-left winners-page__search">
                  <i className="pi pi-search" />
                  <InputText
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Buscar por usuario o recompensa"
                  />
                </span>

                <Dropdown
                  value={rarityFilter}
                  options={rarityOptions}
                  optionLabel="label"
                  optionValue="value"
                  onChange={(e) => setRarityFilter(e.value)}
                  placeholder="Todas las rarezas"
                  showClear
                  style={{ fontFamily: "hitmarker-Bold" }}
                  className="winners-page__rarity-filter"
                />
              </div>

              <DataTable
                value={filteredRows}
                loading={status === "loading"}
                paginator
                rows={!isMobile ? 25 : 100}
                rowsPerPageOptions={[25, 50, 100]}
                pageLinkSize={isMobile ? 1 : 5}
                emptyMessage="No se encontraron ganadores con esos filtros."
                className="winners-page__table"
                stripedRows
                scrollable
              >
                <Column
                  field="User"
                  header="Usuario"
                  sortable
                  style={{ minWidth: "100px" }}
                />
                <Column
                  field="Item"
                  header="Recompensa"
                  sortable
                  style={{ minWidth: "10px" }}
                />
                <Column
                  field="Rarirty"
                  header="Rareza"
                  sortable
                  style={{ minWidth: "10px" }}
                  body={(row) => <RarityBadge value={row.Rarirty} />}
                  sortFunction={(e) => {
                    const order = { Mythic: 0, Legendary: 1, Epic: 2 };
                    return [...e.data].sort((a, b) => {
                      const diff =
                        (order[a.Rarirty] ?? 99) - (order[b.Rarirty] ?? 99);
                      return e.order === 1 ? diff : -diff;
                    });
                  }}
                />
              </DataTable>

              <p className="winners-page__count">
                {filteredRows.length} de {rows.length} ganadores
              </p>
            </>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default WinnersPage;
