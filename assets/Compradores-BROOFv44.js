import{r as d,j as a}from"./vendor-react-gizeiZTa.js";import{u as Z,a as b,r as G,m as E,C as Q,c as se}from"./main-gnpwgveJ.js";import{T as ee}from"./TabelaDados-EiuwCmts.js";import{M as ae}from"./Modal-DDr4OihN.js";import{C as O,K as le,a as ne,V as de,T as ie}from"./UI-C-nhqbLX.js";import{e as ce}from"./exportPDF-DPLeOUEl.js";import"./vendor-CjA6uO8Q.js";import"./vendor-router-B2jHuUnp.js";import"./vendor-supabase-CtKZrUab.js";

// --- DADOS INICIAIS DE MATERIAS-PRIMAS (PERSISTIDOS EM LOCALSTORAGE) ---
const STORAGE_KEY_MP = "preinfra_compras_mp_v1";

const DADOS_INICIAIS_MP = {
  compras: [
    { id: "MP-2026-001", data: "2026-11-18", nfe: "008.921", fornecedor: "Votorantim Cimentos S.A.", insumo: "Cimento CP-V ARI", categoria: "Cimento", quantidade: 60, unidade: "t", unitario: 680.00, total: 40800.00, status: "Entregue", romaneio: "ROM-8841", mp: true },
    { id: "MP-2026-002", data: "2026-11-16", nfe: "142.083", fornecedor: "Gerdau Aços Longos S.A.", insumo: "Aço CA-50 Cortado/Dobrado", categoria: "Aço", quantidade: 14500, unidade: "kg", unitario: 8.42, total: 122090.00, status: "Entregue", romaneio: "ROM-8835", mp: true },
    { id: "MP-2026-003", data: "2026-11-14", nfe: "031.554", fornecedor: "Mineração Canoense Ltda", insumo: "Areia Média Lavada", categoria: "Agregado", quantidade: 120, unidade: "m³", unitario: 95.00, total: 11400.00, status: "Entregue", romaneio: "ROM-8829", mp: true },
    { id: "MP-2026-004", data: "2026-11-12", nfe: "019.442", fornecedor: "Pedreira Basalto Sapucaia", insumo: "Brita 1 Basalto", categoria: "Agregado", quantidade: 95, unidade: "t", unitario: 78.50, total: 7457.50, status: "Entregue", romaneio: "ROM-8818", mp: true },
    { id: "MP-2026-005", data: "2026-11-10", nfe: "005.120", fornecedor: "MC-Bauchemie Brasil", insumo: "Aditivo Superplastificante FK 63", categoria: "Aditivo", quantidade: 1200, unidade: "kg", unitario: 14.80, total: 17760.00, status: "Entregue", romaneio: "ROM-8802", mp: true },
    { id: "MP-2026-006", data: "2026-11-05", nfe: "008.890", fornecedor: "Votorantim Cimentos S.A.", insumo: "Cimento CP-V ARI", categoria: "Cimento", quantidade: 70, unidade: "t", unitario: 675.00, total: 47250.00, status: "Entregue", romaneio: "ROM-8790", mp: true },
    { id: "MP-2026-007", data: "2026-11-03", nfe: "141.950", fornecedor: "Gerdau Aços Longos S.A.", insumo: "Aço CA-60", categoria: "Aço", quantidade: 8000, unidade: "kg", unitario: 8.65, total: 69200.00, status: "Entregue", romaneio: "ROM-8774", mp: true },
    { id: "MP-2026-008", data: "2026-10-28", nfe: "031.401", fornecedor: "Mineração Canoense Ltda", insumo: "Areia Média Lavada", categoria: "Agregado", quantidade: 150, unidade: "m³", unitario: 94.00, total: 14100.00, status: "Entregue", romaneio: "ROM-8755", mp: true },
    { id: "MP-2026-009", data: "2026-10-22", nfe: "019.380", fornecedor: "Pedreira Basalto Sapucaia", insumo: "Brita 0 (Pedrisco)", categoria: "Agregado", quantidade: 110, unidade: "t", unitario: 82.00, total: 9020.00, status: "Entregue", romaneio: "ROM-8730", mp: true },
    { id: "MP-2026-010", data: "2026-10-15", nfe: "141.720", fornecedor: "Gerdau Aços Longos S.A.", insumo: "Aço CA-50 Cortado/Dobrado", categoria: "Aço", quantidade: 16000, unidade: "kg", unitario: 8.15, total: 130400.00, status: "Entregue", romaneio: "ROM-8712", mp: true }
  ],
  historicoMensal: [
    { mes: "Jul/26", totalReais: 142800, volumeToneladas: 240, nfeQtd: 5 },
    { mes: "Ago/26", totalReais: 168400, volumeToneladas: 285, nfeQtd: 6 },
    { mes: "Set/26", totalReais: 175900, volumeToneladas: 305, nfeQtd: 6 },
    { mes: "Out/26", totalReais: 192300, volumeToneladas: 330, nfeQtd: 7 },
    { mes: "Nov/26", totalReais: 163200, volumeToneladas: 260, nfeQtd: 4 }
  ],
  curvaCustos: {
    "Aço CA-50 Cortado/Dobrado": {
      unidade: "R$/kg",
      pontos: [
        { mes: "Jul", valor: 7.65 },
        { mes: "Ago", valor: 7.80 },
        { mes: "Set", valor: 7.92 },
        { mes: "Out", valor: 8.15 },
        { mes: "Nov", valor: 8.42 }
      ],
      mediaMovel: 7.99,
      variacaoPct: "+5.4%",
      alerta: "Preço atual (R$ 8,42/kg) está +5.4% acima da média móvel histórica de 5 meses (R$ 7,99/kg). Recomenda-se travar lote de compra com a Gerdau para os próximos 60 dias."
    },
    "Cimento CP-V ARI": {
      unidade: "R$/t",
      pontos: [
        { mes: "Jul", valor: 650.00 },
        { mes: "Ago", valor: 660.00 },
        { mes: "Set", valor: 665.00 },
        { mes: "Out", valor: 672.00 },
        { mes: "Nov", valor: 680.00 }
      ],
      mediaMovel: 665.40,
      variacaoPct: "+2.2%",
      alerta: "Preço atual (R$ 680,00/t) está +2.2% acima da média histórica (R$ 665,40/t). Variação dentro da margem operacional de cimento a granel."
    },
    "Areia Média Lavada": {
      unidade: "R$/m³",
      pontos: [
        { mes: "Jul", valor: 92.00 },
        { mes: "Ago", valor: 92.50 },
        { mes: "Set", valor: 93.00 },
        { mes: "Out", valor: 94.00 },
        { mes: "Nov", valor: 95.00 }
      ],
      mediaMovel: 93.30,
      variacaoPct: "+1.8%",
      alerta: null
    },
    "Brita 1 Basalto": {
      unidade: "R$/t",
      pontos: [
        { mes: "Jul", valor: 76.00 },
        { mes: "Ago", valor: 76.50 },
        { mes: "Set", valor: 77.00 },
        { mes: "Out", valor: 77.80 },
        { mes: "Nov", valor: 78.50 }
      ],
      mediaMovel: 77.16,
      variacaoPct: "+1.7%",
      alerta: null
    },
    "Aditivo Superplastificante FK 63": {
      unidade: "R$/kg",
      pontos: [
        { mes: "Jul", valor: 14.20 },
        { mes: "Ago", valor: 14.35 },
        { mes: "Set", valor: 14.50 },
        { mes: "Out", valor: 14.65 },
        { mes: "Nov", valor: 14.80 }
      ],
      mediaMovel: 14.50,
      variacaoPct: "+2.1%",
      alerta: "Preço atual (R$ 14,80/kg) está +2.1% da média histórica. Consumo de aditivo em conformidade com dosagem de concreto autoadensável (CAA)."
    }
  }
};

// --- ICONES SVG LUCIDE (ZERO EMOJI NA UI TECNICA) ---
function SvgTrendingUp({className="w-4 h-4"}){
  return a.jsxs("svg",{className:className,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[
    a.jsx("polyline",{points:"23 6 13.5 15.5 8.5 10.5 1 18"}),
    a.jsx("polyline",{points:"17 6 23 6 23 12"})
  ]});
}

function SvgDollarSign({className="w-4 h-4"}){
  return a.jsxs("svg",{className:className,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[
    a.jsx("line",{x1:"12",y1:"1",x2:"12",y2:"23"}),
    a.jsx("path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"})
  ]});
}

function SvgLayers({className="w-4 h-4"}){
  return a.jsxs("svg",{className:className,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[
    a.jsx("polygon",{points:"12 2 2 7 12 12 22 7 12 2"}),
    a.jsx("polyline",{points:"2 17 12 22 22 17"}),
    a.jsx("polyline",{points:"2 12 12 17 22 12"})
  ]});
}

function SvgFactory({className="w-4 h-4"}){
  return a.jsx("svg",{className:className,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:
    a.jsx("path",{d:"M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"})
  });
}

function SvgFileText({className="w-4 h-4"}){
  return a.jsxs("svg",{className:className,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[
    a.jsx("path",{d:"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"}),
    a.jsx("polyline",{points:"14 2 14 8 20 8"}),
    a.jsx("line",{x1:"16",y1:"13",x2:"8",y2:"13"}),
    a.jsx("line",{x1:"16",y1:"17",x2:"8",y2:"17"}),
    a.jsx("polyline",{points:"10 9 9 9 8 9"})
  ]});
}

function SvgAlertTriangle({className="w-4 h-4"}){
  return a.jsxs("svg",{className:className,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[
    a.jsx("path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"}),
    a.jsx("line",{x1:"12",y1:"9",x2:"12",y2:"13"}),
    a.jsx("line",{x1:"12",y1:"17",x2:"12.01",y2:"17"})
  ]});
}

function SvgCheckCircle({className="w-4 h-4"}){
  return a.jsxs("svg",{className:className,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[
    a.jsx("path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14"}),
    a.jsx("polyline",{points:"22 4 12 14.01 9 11.01"})
  ]});
}

function SvgFilter({className="w-4 h-4"}){
  return a.jsx("svg",{className:className,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:
    a.jsx("polygon",{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"})
  });
}

function SvgDownload({className="w-4 h-4"}){
  return a.jsxs("svg",{className:className,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[
    a.jsx("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),
    a.jsx("polyline",{points:"7 10 12 15 17 10"}),
    a.jsx("line",{x1:"12",y1:"15",x2:"12",y2:"3"})
  ]});
}

function SvgPlus({className="w-4 h-4"}){
  return a.jsxs("svg",{className:className,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[
    a.jsx("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),
    a.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"})
  ]});
}

// --- PAINEL DE MATERIAS-PRIMAS COMPONENT (TALMIDDEV PATTERN) ---
function PainelMateriasPrimas(){
  const [dados, setDados] = d.useState(()=>{
    try {
      const salvo = localStorage.getItem(STORAGE_KEY_MP);
      if (salvo) return JSON.parse(salvo);
    } catch(e){}
    return DADOS_INICIAIS_MP;
  });

  const [somenteMP, setSomenteMP] = d.useState(true);
  const [tipoGrafico, setTipoGrafico] = d.useState("reais"); // "reais" ou "toneladas"
  const [insumoSelecionado, setInsumoSelecionado] = d.useState("Aço CA-50 Cortado/Dobrado");
  const [filtroFornecedor, setFiltroFornecedor] = d.useState("todos");
  const [modalAberto, setModalAberto] = d.useState(false);
  const [novaCompra, setNovaCompra] = d.useState({
    fornecedor: "Gerdau Aços Longos S.A.",
    insumo: "Aço CA-50 Cortado/Dobrado",
    categoria: "Aço",
    nfe: "",
    quantidade: "",
    unidade: "kg",
    unitario: "",
    romaneio: ""
  });

  d.useEffect(()=>{
    try {
      localStorage.setItem(STORAGE_KEY_MP, JSON.stringify(dados));
    } catch(e){}
  }, [dados]);

  // Lista filtrada de compras
  const comprasFiltradas = d.useMemo(()=>{
    let lista = dados.compras || [];
    if (somenteMP) {
      lista = lista.filter(item => item.mp !== false);
    }
    if (filtroFornecedor !== "todos") {
      lista = lista.filter(item => item.fornecedor === filtroFornecedor);
    }
    return lista;
  }, [dados, somenteMP, filtroFornecedor]);

  // KPIs calculados
  const totalGeralReais = d.useMemo(()=>{
    return (dados.historicoMensal || []).reduce((acc, cur) => acc + (cur.totalReais || 0), 0);
  }, [dados]);

  const totalGeralToneladas = d.useMemo(()=>{
    return (dados.historicoMensal || []).reduce((acc, cur) => acc + (cur.volumeToneladas || 0), 0);
  }, [dados]);

  const totalNfe = d.useMemo(()=>{
    return (dados.historicoMensal || []).reduce((acc, cur) => acc + (cur.nfeQtd || 0), 0) + 0;
  }, [dados]);

  // Fornecedores unicos de MP
  const fornecedoresMP = [
    "Votorantim Cimentos S.A.",
    "Gerdau Aços Longos S.A.",
    "Mineração Canoense Ltda",
    "Pedreira Basalto Sapucaia",
    "MC-Bauchemie Brasil"
  ];

  // Insumo data para Card 2
  const curvaAtual = dados.curvaCustos[insumoSelecionado] || {
    unidade: "R$/un",
    pontos: [],
    mediaMovel: 0,
    alerta: null
  };

  // Salvar nova compra
  function salvarNovaCompra(e){
    e.preventDefault();
    if (!novaCompra.nfe || !novaCompra.quantidade || !novaCompra.unitario) {
      alert("Preencha NF-e, Quantidade e Valor Unitário.");
      return;
    }
    const qtd = parseFloat(novaCompra.quantidade);
    const unit = parseFloat(novaCompra.unitario);
    const total = qtd * unit;
    const item = {
      id: `MP-2026-${String(dados.compras.length + 1).padStart(3, '0')}`,
      data: new Date().toISOString().slice(0, 10),
      nfe: novaCompra.nfe,
      fornecedor: novaCompra.fornecedor,
      insumo: novaCompra.insumo,
      categoria: novaCompra.categoria,
      quantidade: qtd,
      unidade: novaCompra.unidade,
      unitario: unit,
      total: total,
      status: "Entregue",
      romaneio: novaCompra.romaneio || `ROM-${Math.floor(1000 + Math.random()*9000)}`,
      mp: true
    };

    setDados(prev => ({
      ...prev,
      compras: [item, ...prev.compras]
    }));
    setModalAberto(false);
    setNovaCompra({
      fornecedor: "Gerdau Aços Longos S.A.",
      insumo: "Aço CA-50 Cortado/Dobrado",
      categoria: "Aço",
      nfe: "",
      quantidade: "",
      unidade: "kg",
      unitario: "",
      romaneio: ""
    });
  }

  // Exportar CSV
  function exportarCsvMP(){
    const header = "ID;Data;NF-e;Fornecedor;Insumo;Categoria;Quantidade;Unidade;Unitario_RS;Total_RS;Status;Romaneio\n";
    const rows = comprasFiltradas.map(c => 
      `${c.id};${c.data};${c.nfe};"${c.fornecedor}";"${c.insumo}";${c.categoria};${c.quantidade};${c.unidade};${c.unitario.toFixed(2)};${c.total.toFixed(2)};${c.status};${c.romaneio}`
    ).join("\n");
    const blob = new Blob(["\ufeff" + header + rows], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const aEl = document.createElement("a");
    aEl.href = url;
    aEl.download = `PreInfra_Compras_MateriasPrimas_${new Date().toISOString().slice(0,10)}.csv`;
    aEl.click();
    URL.revokeObjectURL(url);
  }

  return a.jsxs("div", {
    className: "space-y-6 text-slate-100",
    children: [
      // HEADER BAR WITH TALMIDDEV BADGE & TOGGLE
      a.jsxs("div", {
        className: "bg-slate-800/80 border border-slate-700/80 rounded-xl p-5 flex flex-wrap items-center justify-between gap-4 shadow-lg backdrop-blur-sm",
        children: [
          a.jsxs("div", {
            className: "flex items-center gap-3",
            children: [
              a.jsx("div", {
                className: "p-2.5 bg-blue-500/10 border border-blue-500/30 rounded-lg text-blue-400",
                children: a.jsx(SvgLayers, { className: "w-6 h-6" })
              }),
              a.jsxs("div", {
                children: [
                  a.jsxs("div", {
                    className: "flex items-center gap-2",
                    children: [
                      a.jsx("h2", { className: "text-lg font-bold tracking-tight text-white", children: "Painel de Matérias-Primas" }),
                      a.jsx("span", { className: "text-[11px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/30", children: "TalmidDev Dark" })
                    ]
                  }),
                  a.jsx("p", { className: "text-xs text-slate-400 mt-0.5", children: "Gestão industrial de suprimentos, custos unitários e homologação de insumos estruturais" })
                ]
              })
            ]
          }),
          a.jsxs("div", {
            className: "flex flex-wrap items-center gap-3",
            children: [
              // TOGGLE SOMENTE MATERIAS-PRIMAS
              a.jsxs("label", {
                className: "flex items-center gap-2.5 px-3 py-1.5 rounded-lg border border-slate-700 bg-slate-900/60 cursor-pointer select-none text-xs font-medium hover:border-slate-600 transition-colors",
                children: [
                  a.jsx("input", {
                    type: "checkbox",
                    checked: somenteMP,
                    onChange: e => setSomenteMP(e.target.checked),
                    className: "sr-only"
                  }),
                  a.jsx("div", {
                    className: `w-9 h-5 rounded-full transition-colors relative ${somenteMP ? 'bg-blue-600' : 'bg-slate-700'}`,
                    children: a.jsx("div", {
                      className: `w-3.5 h-3.5 rounded-full bg-white absolute top-0.75 transition-transform ${somenteMP ? 'left-4.5' : 'left-0.75'}`
                    })
                  }),
                  a.jsx("span", { className: "text-slate-200", children: "Somente Matérias-Primas" })
                ]
              }),
              // CSV EXPORT BUTTON
              a.jsxs("button", {
                onClick: exportarCsvMP,
                className: "flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-700 bg-slate-900/60 hover:bg-slate-700 text-xs font-medium text-slate-200 transition-colors",
                children: [
                  a.jsx(SvgDownload, { className: "w-3.5 h-3.5 text-slate-400" }),
                  a.jsx("span", { children: "Exportar CSV" })
                ]
              }),
              // + REGISTRAR COMPRA BUTTON
              a.jsxs("button", {
                onClick: () => setModalAberto(true),
                className: "flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-xs font-semibold text-white shadow-sm transition-colors",
                children: [
                  a.jsx(SvgPlus, { className: "w-4 h-4" }),
                  a.jsx("span", { children: "Nova Compra MP" })
                ]
              })
            ]
          })
        ]
      }),

      // --- 4 KPI CARDS ---
      a.jsxs("div", {
        className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4",
        children: [
          // KPI 1: TOTAL COMPRADO
          a.jsxs("div", {
            className: "bg-slate-800/80 border border-slate-700/80 rounded-xl p-4 shadow-sm relative overflow-hidden",
            children: [
              a.jsxs("div", {
                className: "flex items-center justify-between",
                children: [
                  a.jsx("span", { className: "text-[11px] font-semibold uppercase tracking-wider text-slate-400", children: "Total Comprado no Período" }),
                  a.jsx("div", { className: "p-2 rounded-lg bg-emerald-500/10 text-emerald-400", children: a.jsx(SvgDollarSign, { className: "w-4 h-4" }) })
                ]
              }),
              a.jsx("div", { className: "text-2xl font-bold text-white mt-2 tracking-tight", children: `R$ ${totalGeralReais.toLocaleString('pt-BR', {minimumFractionDigits: 2})}` }),
              a.jsxs("div", {
                className: "flex items-center gap-1.5 text-xs text-slate-400 mt-1",
                children: [
                  a.jsx("span", { className: "text-emerald-400 font-semibold", children: `${totalGeralToneladas.toLocaleString('pt-BR')} t` }),
                  a.jsx("span", { children: "de insumos acumulados" })
                ]
              })
            ]
          }),

          // KPI 2: NOTAS FISCAIS
          a.jsxs("div", {
            className: "bg-slate-800/80 border border-slate-700/80 rounded-xl p-4 shadow-sm relative overflow-hidden",
            children: [
              a.jsxs("div", {
                className: "flex items-center justify-between",
                children: [
                  a.jsx("span", { className: "text-[11px] font-semibold uppercase tracking-wider text-slate-400", children: "Notas Fiscais Industriais" }),
                  a.jsx("div", { className: "p-2 rounded-lg bg-blue-500/10 text-blue-400", children: a.jsx(SvgFileText, { className: "w-4 h-4" }) })
                ]
              }),
              a.jsxs("div", { className: "text-2xl font-bold text-white mt-2 tracking-tight", children: [totalNfe, " NF-e"] }),
              a.jsx("div", { className: "text-xs text-slate-400 mt-1", children: "Todas vinculadas a romaneios de entrada" })
            ]
          }),

          // KPI 3: FORNECEDORES ATIVOS DE MP
          a.jsxs("div", {
            className: "bg-slate-800/80 border border-slate-700/80 rounded-xl p-4 shadow-sm relative overflow-hidden",
            children: [
              a.jsxs("div", {
                className: "flex items-center justify-between",
                children: [
                  a.jsx("span", { className: "text-[11px] font-semibold uppercase tracking-wider text-slate-400", children: "Fornecedores Homologados" }),
                  a.jsx("div", { className: "p-2 rounded-lg bg-indigo-500/10 text-indigo-400", children: a.jsx(SvgFactory, { className: "w-4 h-4" }) })
                ]
              }),
              a.jsx("div", { className: "text-2xl font-bold text-white mt-2 tracking-tight", children: "5 Ativos" }),
              a.jsx("div", { className: "text-xs text-slate-400 mt-1 truncate", children: "Votorantim, Gerdau, Mineradora, Basalto, MC" })
            ]
          }),

          // KPI 4: INSUMO MAIOR ALTA
          a.jsxs("div", {
            className: "bg-slate-800/80 border border-slate-700/80 rounded-xl p-4 shadow-sm relative overflow-hidden",
            children: [
              a.jsxs("div", {
                className: "flex items-center justify-between",
                children: [
                  a.jsx("span", { className: "text-[11px] font-semibold uppercase tracking-wider text-slate-400", children: "Insumo Maior Alta Trimestral" }),
                  a.jsx("div", { className: "p-2 rounded-lg bg-amber-500/10 text-amber-400", children: a.jsx(SvgTrendingUp, { className: "w-4 h-4" }) })
                ]
              }),
              a.jsxs("div", { className: "text-2xl font-bold text-amber-400 mt-2 tracking-tight", children: ["+6.4% ", a.jsx("span", { className: "text-sm text-slate-300 font-normal", children: "Aço CA-50" })] }),
              a.jsx("div", { className: "text-xs text-slate-400 mt-1", children: "De R$ 7,65/kg (Jul) para R$ 8,42/kg (Nov)" })
            ]
          })
        ]
      }),

      // --- SECTION: 2 INTERACTIVE CARDS ---
      a.jsxs("div", {
        className: "grid grid-cols-1 lg:grid-cols-2 gap-6",
        children: [
          // CARD 1: VOLUME MENSAL DE COMPRAS
          a.jsxs("div", {
            className: "bg-slate-800/80 border border-slate-700/80 rounded-xl p-5 shadow-sm space-y-4",
            children: [
              a.jsxs("div", {
                className: "flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-700/60",
                children: [
                  a.jsxs("div", {
                    children: [
                      a.jsx("h3", { className: "text-sm font-bold text-white", children: "Card 1: Volume Mensal de Compras" }),
                      a.jsx("p", { className: "text-[11px] text-slate-400", children: "Evolução do suprimento industrial (Julho a Novembro/2026)" })
                    ]
                  }),
                  // TOGGLE FINANCEIRO VS FISICO
                  a.jsxs("div", {
                    className: "flex items-center p-0.5 rounded-lg bg-slate-900 border border-slate-700 text-xs",
                    children: [
                      a.jsx("button", {
                        onClick: () => setTipoGrafico("reais"),
                        className: `px-2.5 py-1 rounded-md font-medium transition-colors ${tipoGrafico === 'reais' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'}`,
                        children: "Valor (R$)"
                      }),
                      a.jsx("button", {
                        onClick: () => setTipoGrafico("toneladas"),
                        className: `px-2.5 py-1 rounded-md font-medium transition-colors ${tipoGrafico === 'toneladas' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'}`,
                        children: "Volume (t)"
                      })
                    ]
                  })
                ]
              }),

              // SVG BAR CHART (VOLUME MENSAL)
              a.jsxs("div", {
                className: "w-full",
                children: [
                  a.jsxs("svg", {
                    viewBox: "0 0 500 210",
                    className: "w-full h-52 overflow-visible select-none",
                    children: [
                      // DEFS FOR GRADIENT
                      a.jsx("defs", {
                        children: a.jsxs("linearGradient", {
                          id: "barGradient",
                          x1: "0",
                          y1: "0",
                          x2: "0",
                          y2: "1",
                          children: [
                            a.jsx("stop", { offset: "0%", stopColor: tipoGrafico === 'reais' ? '#3b82f6' : '#10b981', stopOpacity: "0.9" }),
                            a.jsx("stop", { offset: "100%", stopColor: tipoGrafico === 'reais' ? '#1d4ed8' : '#047857', stopOpacity: "0.4" })
                          ]
                        })
                      }),
                      // GRIDLINES
                      a.jsx("line", { x1: "40", y1: "30", x2: "480", y2: "30", stroke: "#334155", strokeDasharray: "3 3", strokeWidth: "1" }),
                      a.jsx("line", { x1: "40", y1: "80", x2: "480", y2: "80", stroke: "#334155", strokeDasharray: "3 3", strokeWidth: "1" }),
                      a.jsx("line", { x1: "40", y1: "130", x2: "480", y2: "130", stroke: "#334155", strokeDasharray: "3 3", strokeWidth: "1" }),
                      a.jsx("line", { x1: "40", y1: "175", x2: "480", y2: "175", stroke: "#475569", strokeWidth: "1.5" }),

                      // BARS & LABELS
                      ...(dados.historicoMensal || []).map((item, idx) => {
                        const x = 70 + idx * 85;
                        const maxVal = tipoGrafico === 'reais' ? 220000 : 380;
                        const curVal = tipoGrafico === 'reais' ? item.totalReais : item.volumeToneladas;
                        const barHeight = Math.max(10, Math.round((curVal / maxVal) * 140));
                        const y = 175 - barHeight;
                        const labelTop = tipoGrafico === 'reais' ? `R$ ${(curVal/1000).toFixed(0)}k` : `${curVal} t`;

                        return a.jsxs("g", {
                          key: item.mes,
                          children: [
                            // BAR RECT
                            a.jsx("rect", {
                              x: x - 22,
                              y: y,
                              width: "44",
                              height: barHeight,
                              rx: "4",
                              fill: "url(#barGradient)",
                              className: "transition-all duration-300 hover:opacity-80 cursor-pointer"
                            }),
                            // VALUE TEXT ON TOP
                            a.jsx("text", {
                              x: x,
                              y: y - 8,
                              textAnchor: "middle",
                              fill: "#f8fafc",
                              fontSize: "11",
                              fontWeight: "600",
                              children: labelTop
                            }),
                            // MONTH LABEL
                            a.jsx("text", {
                              x: x,
                              y: 195,
                              textAnchor: "middle",
                              fill: "#94a3b8",
                              fontSize: "11",
                              fontWeight: "500",
                              children: item.mes
                            }),
                            // NFE BADGE
                            a.jsx("text", {
                              x: x,
                              y: 208,
                              textAnchor: "middle",
                              fill: "#64748b",
                              fontSize: "9",
                              children: `${item.nfeQtd} NF-e`
                            })
                          ]
                        });
                      })
                    ]
                  }),
                  a.jsxs("div", {
                    className: "flex items-center justify-between text-xs text-slate-400 mt-2 px-2 pt-2 border-t border-slate-700/50",
                    children: [
                      a.jsxs("span", { children: ["Média mensal: ", a.jsx("strong", { className: "text-slate-200", children: tipoGrafico === 'reais' ? 'R$ 168.520,00' : '284 t' })] }),
                      a.jsxs("span", { children: ["Pico: ", a.jsx("strong", { className: "text-blue-400", children: tipoGrafico === 'reais' ? 'Out/26 (R$ 192.300)' : 'Out/26 (330 t)' })] })
                    ]
                  })
                ]
              })
            ]
          }),

          // CARD 2: CURVA DE CUSTO DO INSUMO SELECIONADO
          a.jsxs("div", {
            className: "bg-slate-800/80 border border-slate-700/80 rounded-xl p-5 shadow-sm space-y-4",
            children: [
              a.jsxs("div", {
                className: "flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-700/60",
                children: [
                  a.jsxs("div", {
                    children: [
                      a.jsx("h3", { className: "text-sm font-bold text-white", children: "Card 2: Curva de Custo do Insumo" }),
                      a.jsx("p", { className: "text-[11px] text-slate-400", children: "Histórico de preço unitário e alerta automático contra média móvel" })
                    ]
                  }),
                  // SELECT INSUMO
                  a.jsx("select", {
                    value: insumoSelecionado,
                    onChange: e => setInsumoSelecionado(e.target.value),
                    className: "border border-slate-700 bg-slate-900 rounded-lg px-2.5 py-1 text-xs text-slate-200 focus:outline-none focus:border-blue-500",
                    children: Object.keys(dados.curvaCustos).map(nome => 
                      a.jsx("option", { key: nome, value: nome, children: nome })
                    )
                  })
                ]
              }),

              // SVG LINE CHART (CURVA DE CUSTO)
              a.jsxs("div", {
                className: "w-full",
                children: [
                  a.jsxs("svg", {
                    viewBox: "0 0 500 170",
                    className: "w-full h-44 overflow-visible select-none",
                    children: [
                      // GRIDLINES
                      a.jsx("line", { x1: "40", y1: "25", x2: "480", y2: "25", stroke: "#334155", strokeDasharray: "3 3", strokeWidth: "1" }),
                      a.jsx("line", { x1: "40", y1: "65", x2: "480", y2: "65", stroke: "#334155", strokeDasharray: "3 3", strokeWidth: "1" }),
                      a.jsx("line", { x1: "40", y1: "105", x2: "480", y2: "105", stroke: "#334155", strokeDasharray: "3 3", strokeWidth: "1" }),
                      a.jsx("line", { x1: "40", y1: "145", x2: "480", y2: "145", stroke: "#475569", strokeWidth: "1.5" }),

                      // AREA & LINE COMPUTATION
                      (()=>{
                        const pontos = curvaAtual.pontos || [];
                        if (pontos.length === 0) return null;
                        const minVal = Math.min(...pontos.map(p => p.valor)) * 0.95;
                        const maxVal = Math.max(...pontos.map(p => p.valor)) * 1.05;
                        const range = (maxVal - minVal) || 1;

                        const coords = pontos.map((p, idx) => {
                          const x = 70 + idx * 95;
                          const y = 140 - Math.round(((p.valor - minVal) / range) * 110);
                          return { x, y, ...p };
                        });

                        const pathStr = coords.map((c, i) => (i === 0 ? `M ${c.x} ${c.y}` : `L ${c.x} ${c.y}`)).join(" ");
                        const areaStr = `${pathStr} L ${coords[coords.length-1].x} 145 L ${coords[0].x} 145 Z`;

                        // MEDIA MOVEL HORIZONTAL LINE
                        const mmY = 140 - Math.round(((curvaAtual.mediaMovel - minVal) / range) * 110);

                        return a.jsxs("g", {
                          children: [
                            // DEFS GRADIENT
                            a.jsx("defs", {
                              children: a.jsxs("linearGradient", {
                                id: "lineAreaGrad",
                                x1: "0",
                                y1: "0",
                                x2: "0",
                                y2: "1",
                                children: [
                                  a.jsx("stop", { offset: "0%", stopColor: "#3b82f6", stopOpacity: "0.35" }),
                                  a.jsx("stop", { offset: "100%", stopColor: "#3b82f6", stopOpacity: "0.0" })
                                ]
                              })
                            }),
                            // AREA
                            a.jsx("path", { d: areaStr, fill: "url(#lineAreaGrad)" }),
                            // MEDIA MOVEL DASHED LINE
                            a.jsx("line", {
                              x1: "50",
                              y1: mmY,
                              x2: "470",
                              y2: mmY,
                              stroke: "#f59e0b",
                              strokeDasharray: "4 4",
                              strokeWidth: "1.5"
                            }),
                            a.jsx("text", {
                              x: "475",
                              y: mmY + 3,
                              fill: "#f59e0b",
                              fontSize: "9",
                              fontWeight: "600",
                              textAnchor: "start",
                              children: `Média Móvel (${curvaAtual.mediaMovel.toFixed(2)})`
                            }),
                            // MAIN CURVE LINE
                            a.jsx("path", {
                              d: pathStr,
                              fill: "none",
                              stroke: "#3b82f6",
                              strokeWidth: "2.5",
                              strokeLinecap: "round",
                              strokeLinejoin: "round"
                            }),
                            // POINTS AND LABELS
                            coords.map(pt => a.jsxs("g", {
                              key: pt.mes,
                              children: [
                                a.jsx("circle", {
                                  cx: pt.x,
                                  cy: pt.y,
                                  r: "4.5",
                                  fill: "#3b82f6",
                                  stroke: "#1e293b",
                                  strokeWidth: "2"
                                }),
                                a.jsx("text", {
                                  x: pt.x,
                                  y: pt.y - 8,
                                  textAnchor: "middle",
                                  fill: "#ffffff",
                                  fontSize: "10",
                                  fontWeight: "600",
                                  children: `${pt.valor.toFixed(2)}`
                                }),
                                a.jsx("text", {
                                  x: pt.x,
                                  y: 160,
                                  textAnchor: "middle",
                                  fill: "#94a3b8",
                                  fontSize: "11",
                                  children: pt.mes
                                })
                              ]
                            }))
                          ]
                        });
                      })()
                    ]
                  }),

                  // AUTOMATIC ALERT BANNER
                  curvaAtual.alerta ? a.jsxs("div", {
                    className: "mt-3 p-3 rounded-lg border border-amber-500/30 bg-amber-500/10 text-amber-200 text-xs flex items-start gap-2.5",
                    children: [
                      a.jsx(SvgAlertTriangle, { className: "w-4 h-4 text-amber-400 shrink-0 mt-0.5" }),
                      a.jsxs("div", {
                        children: [
                          a.jsx("strong", { className: "text-amber-300", children: "Alerta de Variação de Preço: " }),
                          curvaAtual.alerta
                        ]
                      })
                    ]
                  }) : a.jsxs("div", {
                    className: "mt-3 p-2.5 rounded-lg border border-emerald-500/30 bg-emerald-500/10 text-emerald-300 text-xs flex items-center gap-2",
                    children: [
                      a.jsx(SvgCheckCircle, { className: "w-4 h-4 text-emerald-400 shrink-0" }),
                      a.jsx("span", { children: "Preço atual estável e alinhado com a média móvel histórica de suprimentos." })
                    ]
                  })
                ]
              })
            ]
          })
        ]
      }),

      // --- SECTION: TABELA DE COMPRAS DE MATERIAS-PRIMAS ---
      a.jsxs("div", {
        className: "bg-slate-800/80 border border-slate-700/80 rounded-xl p-5 shadow-sm space-y-4",
        children: [
          a.jsxs("div", {
            className: "flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-700/60",
            children: [
              a.jsxs("div", {
                children: [
                  a.jsx("h3", { className: "text-sm font-bold text-white", children: "Notas Fiscais de Entrada — Matérias-Primas" }),
                  a.jsx("p", { className: "text-[11px] text-slate-400", children: "Rastreabilidade de lotes, romaneios vinculados e conformidade de custos" })
                ]
              }),
              // FILTRO POR FORNECEDOR
              a.jsxs("div", {
                className: "flex items-center gap-2 text-xs",
                children: [
                  a.jsx(SvgFilter, { className: "w-3.5 h-3.5 text-slate-400" }),
                  a.jsx("span", { className: "text-slate-400", children: "Fornecedor:" }),
                  a.jsxs("select", {
                    value: filtroFornecedor,
                    onChange: e => setFiltroFornecedor(e.target.value),
                    className: "border border-slate-700 bg-slate-900 rounded-lg px-2.5 py-1 text-xs text-slate-200 focus:outline-none focus:border-blue-500",
                    children: [
                      a.jsx("option", { value: "todos", children: "Todos os Fornecedores" }),
                      fornecedoresMP.map(f => a.jsx("option", { key: f, value: f, children: f }))
                    ]
                  })
                ]
              })
            ]
          }),

          // TABELA RESPONSIVA (ZERO HORIZONTAL OVERFLOW)
          a.jsx("div", {
            className: "overflow-x-auto max-w-full rounded-lg border border-slate-700/70",
            children: a.jsxs("table", {
              className: "w-full text-left text-xs text-slate-300 divide-y divide-slate-700/60",
              children: [
                a.jsx("thead", {
                  className: "bg-slate-900/80 text-slate-400 uppercase font-semibold text-[10px] tracking-wider",
                  children: a.jsxs("tr", {
                    children: [
                      a.jsx("th", { className: "px-3.5 py-2.5", children: "Código" }),
                      a.jsx("th", { className: "px-3.5 py-2.5", children: "Data" }),
                      a.jsx("th", { className: "px-3.5 py-2.5", children: "NF-e" }),
                      a.jsx("th", { className: "px-3.5 py-2.5", children: "Fornecedor" }),
                      a.jsx("th", { className: "px-3.5 py-2.5", children: "Insumo / Matéria-Prima" }),
                      a.jsx("th", { className: "px-3.5 py-2.5 text-right", children: "Quantidade" }),
                      a.jsx("th", { className: "px-3.5 py-2.5 text-right", children: "Unitário (R$)" }),
                      a.jsx("th", { className: "px-3.5 py-2.5 text-right", children: "Total (R$)" }),
                      a.jsx("th", { className: "px-3.5 py-2.5", children: "Romaneio" }),
                      a.jsx("th", { className: "px-3.5 py-2.5 text-center", children: "Status" })
                    ]
                  })
                }),
                a.jsx("tbody", {
                  className: "divide-y divide-slate-700/50 bg-slate-800/40 font-mono text-[11px]",
                  children: comprasFiltradas.length === 0 ? a.jsx("tr", {
                    children: a.jsx("td", { colSpan: 10, className: "px-4 py-8 text-center text-slate-500 font-sans", children: "Nenhuma compra encontrada para os filtros selecionados." })
                  }) : comprasFiltradas.map((compra) => a.jsxs("tr", {
                    key: compra.id,
                    className: "hover:bg-slate-700/40 transition-colors",
                    children: [
                      a.jsx("td", { className: "px-3.5 py-2.5 font-sans font-medium text-slate-200", children: compra.id }),
                      a.jsx("td", { className: "px-3.5 py-2.5 text-slate-400", children: compra.data }),
                      a.jsx("td", { className: "px-3.5 py-2.5 text-blue-400 font-semibold", children: compra.nfe }),
                      a.jsx("td", { className: "px-3.5 py-2.5 font-sans text-slate-300 font-medium", children: compra.fornecedor }),
                      a.jsx("td", { className: "px-3.5 py-2.5 font-sans text-slate-200", children: compra.insumo }),
                      a.jsx("td", { className: "px-3.5 py-2.5 text-right text-slate-200", children: `${compra.quantidade.toLocaleString('pt-BR')} ${compra.unidade}` }),
                      a.jsx("td", { className: "px-3.5 py-2.5 text-right text-slate-300", children: `R$ ${compra.unitario.toFixed(2)}` }),
                      a.jsx("td", { className: "px-3.5 py-2.5 text-right font-bold text-emerald-400", children: `R$ ${compra.total.toLocaleString('pt-BR', {minimumFractionDigits: 2})}` }),
                      a.jsx("td", { className: "px-3.5 py-2.5 text-slate-400", children: compra.romaneio }),
                      a.jsx("td", {
                        className: "px-3.5 py-2.5 text-center font-sans",
                        children: a.jsx("span", {
                          className: "inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30",
                          children: compra.status
                        })
                      })
                    ]
                  }))
                })
              ]
            })
          })
        ]
      }),

      // --- MODAL: NOVA COMPRA MP ---
      modalAberto && a.jsx(ae, {
        titulo: "Registrar Compra de Matéria-Prima",
        subtitulo: "Entrada industrial de insumo estrutural para pré-moldados",
        onFechar: () => setModalAberto(false),
        largura: "max-w-2xl",
        rodape: a.jsxs("div", {
          className: "flex justify-end gap-2",
          children: [
            a.jsx("button", {
              onClick: () => setModalAberto(false),
              className: "px-4 py-2 rounded-lg text-xs font-medium border border-slate-600 hover:bg-slate-700 text-slate-300",
              children: "Cancelar"
            }),
            a.jsx("button", {
              onClick: salvarNovaCompra,
              className: "px-5 py-2 rounded-lg text-xs font-semibold bg-blue-600 hover:bg-blue-500 text-white",
              children: "Salvar Compra MP"
            })
          ]
        }),
        children: a.jsxs("form", {
          onSubmit: salvarNovaCompra,
          className: "space-y-4 text-xs",
          children: [
            a.jsxs("div", {
              className: "grid sm:grid-cols-2 gap-4",
              children: [
                a.jsxs("label", {
                  className: "block text-slate-300 font-medium",
                  children: [
                    "Fornecedor Homologado *",
                    a.jsx("select", {
                      value: novaCompra.fornecedor,
                      onChange: e => setNovaCompra({...novaCompra, fornecedor: e.target.value}),
                      className: "w-full border border-slate-600 bg-slate-700 rounded-lg px-3 py-2 text-sm mt-1 text-white",
                      children: fornecedoresMP.map(f => a.jsx("option", { key: f, value: f, children: f }))
                    })
                  ]
                }),
                a.jsxs("label", {
                  className: "block text-slate-300 font-medium",
                  children: [
                    "Insumo / Matéria-Prima *",
                    a.jsx("select", {
                      value: novaCompra.insumo,
                      onChange: e => setNovaCompra({...novaCompra, insumo: e.target.value}),
                      className: "w-full border border-slate-600 bg-slate-700 rounded-lg px-3 py-2 text-sm mt-1 text-white",
                      children: Object.keys(dados.curvaCustos).map(k => a.jsx("option", { key: k, value: k, children: k }))
                    })
                  ]
                }),
                a.jsxs("label", {
                  className: "block text-slate-300 font-medium",
                  children: [
                    "Número da NF-e *",
                    a.jsx("input", {
                      required: true,
                      placeholder: "Ex.: 142.085",
                      value: novaCompra.nfe,
                      onChange: e => setNovaCompra({...novaCompra, nfe: e.target.value}),
                      className: "w-full border border-slate-600 bg-slate-700 rounded-lg px-3 py-2 text-sm mt-1 text-white"
                    })
                  ]
                }),
                a.jsxs("label", {
                  className: "block text-slate-300 font-medium",
                  children: [
                    "Romaneio de Entrada",
                    a.jsx("input", {
                      placeholder: "Ex.: ROM-8850",
                      value: novaCompra.romaneio,
                      onChange: e => setNovaCompra({...novaCompra, romaneio: e.target.value}),
                      className: "w-full border border-slate-600 bg-slate-700 rounded-lg px-3 py-2 text-sm mt-1 text-white"
                    })
                  ]
                }),
                a.jsxs("label", {
                  className: "block text-slate-300 font-medium",
                  children: [
                    "Quantidade *",
                    a.jsx("input", {
                      required: true,
                      type: "number",
                      step: "0.01",
                      placeholder: "Ex.: 12000",
                      value: novaCompra.quantidade,
                      onChange: e => setNovaCompra({...novaCompra, quantidade: e.target.value}),
                      className: "w-full border border-slate-600 bg-slate-700 rounded-lg px-3 py-2 text-sm mt-1 text-white"
                    })
                  ]
                }),
                a.jsxs("label", {
                  className: "block text-slate-300 font-medium",
                  children: [
                    "Unidade de Medida",
                    a.jsxs("select", {
                      value: novaCompra.unidade,
                      onChange: e => setNovaCompra({...novaCompra, unidade: e.target.value}),
                      className: "w-full border border-slate-600 bg-slate-700 rounded-lg px-3 py-2 text-sm mt-1 text-white",
                      children: [
                        a.jsx("option", { value: "kg", children: "kg (Quilograma)" }),
                        a.jsx("option", { value: "t", children: "t (Tonelada)" }),
                        a.jsx("option", { value: "m³", children: "m³ (Metro Cúbico)" }),
                        a.jsx("option", { value: "L", children: "L (Litro)" })
                      ]
                    })
                  ]
                }),
                a.jsxs("label", {
                  className: "sm:col-span-2 block text-slate-300 font-medium",
                  children: [
                    "Valor Unitário (R$) *",
                    a.jsx("input", {
                      required: true,
                      type: "number",
                      step: "0.01",
                      placeholder: "Ex.: 8.42",
                      value: novaCompra.unitario,
                      onChange: e => setNovaCompra({...novaCompra, unitario: e.target.value}),
                      className: "w-full border border-slate-600 bg-slate-700 rounded-lg px-3 py-2 text-sm mt-1 text-white"
                    })
                  ]
                })
              ]
            }),
            a.jsxs("div", {
              className: "p-3 rounded-lg bg-slate-900 border border-slate-700 flex items-center justify-between text-xs",
              children: [
                a.jsx("span", { className: "text-slate-400", children: "Valor Total Estimado:" }),
                a.jsx("span", {
                  className: "font-mono font-bold text-emerald-400 text-sm",
                  children: `R$ ${((parseFloat(novaCompra.quantidade) || 0) * (parseFloat(novaCompra.unitario) || 0)).toLocaleString('pt-BR', {minimumFractionDigits: 2})}`
                })
              ]
            })
          ]
        })
      })
    ]
  });
}

// --- TABELA GENÉRICA (MANTIDA ORIGINAL) ---
function X({tabela:u,titulo:m,subtitulo:z,icone:C="📁",colunas:q=[],campos:f=[],ordem:k={col:"criado_em",asc:!1},filtros:w=[],kpis:T,valoresIniciais:L={},transformarParaSalvar:$,podeEditar:P=!0,podeExcluir:g=!0,limite:h=500,extras:M=null}){const{user:r}=Z(),[c,B]=d.useState([]),[I,y]=d.useState(!0),[U,J]=d.useState(null),[j,A]=d.useState({}),[_,N]=d.useState(!1),[e,s]=d.useState(null),[o,i]=d.useState(L),[x,S]=d.useState(!1),[F,v]=d.useState(""),R=d.useCallback(async()=>{y(!0),J(null);let t=b.from(u).select("*").limit(h);Object.entries(j).forEach(([V,D])=>{D&&(t=t.eq(V,D))}),k!=null&&k.col&&(t=t.order(k.col,{ascending:k.asc!==!1}));const{data:n,error:l}=await t;if(l){J(l),y(!1);return}B(n||[]),y(!1)},[u,j,k,h]);d.useEffect(()=>{R()},[R]);function H(){s(null),i({...L}),v(""),N(!0)}function te(t){s(t),i({...L,...t}),v(""),N(!0)}async function W(t){var D;t.preventDefault(),v("");for(const p of f)if(p.obrigatorio&&(o[p.key]===""||o[p.key]==null))return v(`O campo "${p.label}" é obrigatório.`);S(!0);const n=$?$(o):{...o};Object.keys(n).forEach(p=>{n[p]===""&&(n[p]=null)});let l,V;if(e)delete n.id,delete n.criado_em,{error:l}=await b.from(u).update(n).eq("id",e.id),V=e.id;else{r!=null&&r.id&&(n.criado_por=n.criado_por??r.id);const p=await b.from(u).insert(n).select("id").single();l=p.error,V=(D=p.data)==null?void 0:D.id}if(S(!1),l)return v(l.message);await G({acao:e?"update":"insert",tabela:u,registro_id:V,descricao:`${e?"Editou":"Criou"} registro em ${m}`,dados_depois:n}),N(!1),R()}async function oe(t){if(!confirm("Confirma a exclusão deste registro? A ação será registrada na auditoria."))return;const{error:n}=await b.from(u).delete().eq("id",t.id);if(n)return alert(n.message);await G({acao:"delete",tabela:u,registro_id:t.id,descricao:`Excluiu registro de ${m}`,dados_antes:t}),R()}const re=d.useMemo(()=>!P&&!g?q:[...q,{key:"__acoes",label:"Ações",ordenavel:!1,alinhamento:"center",formato:(t,n)=>a.jsxs("span",{className:"flex gap-2 justify-center",children:[P&&a.jsx("button",{onClick:l=>{l.stopPropagation(),te(n)},className:"text-xs text-blue-600 hover:underline",children:"editar"}),g&&a.jsx("button",{onClick:l=>{l.stopPropagation(),oe(n)},className:"text-xs text-red-600 hover:underline",children:"excluir"})]})}],[q,P,g]),K=T?T(c):null;return U?a.jsx(O,{titulo:`${C} ${m}`,children:a.jsxs("div",{className:"text-center py-8",children:[a.jsxs("p",{className:"text-sm text-red-600",children:["Erro ao carregar: ",U.message]}),a.jsx("button",{onClick:R,className:"mt-3 bg-red-600 text-white px-4 py-2 rounded-lg text-sm",children:"Tentar novamente"})]})}):a.jsxs("div",{className:"space-y-5",children:[a.jsxs("header",{className:"flex flex-wrap items-end justify-between gap-3",children:[a.jsxs("div",{children:[a.jsxs("h1",{className:"text-xl font-bold",children:[C," ",m]}),z&&a.jsx("p",{className:"text-sm text-slate-500 mt-1",children:z})]}),a.jsxs("div",{className:"flex gap-2",children:[a.jsx("button",{onClick:()=>ce(m,c,q.filter(t=>t.key!=="__acoes"),u),disabled:c.length===0,className:`border border-slate-300 dark:border-slate-600 px-4 py-2 rounded-lg text-sm hover:bg-slate-100 dark:hover:bg-slate-700 disabled:opacity-40`,children:"⬇️ CSV"}),f.length>0&&a.jsx("button",{onClick:H,className:`bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700`,children:"+ Novo"})]})]}),K&&K.length>0&&a.jsx("div",{className:`grid grid-cols-2 gap-3 ${K.length>=4?"lg:grid-cols-4":"lg:grid-cols-3"}`,children:K.map(t=>a.jsx(le,{...t},t.titulo))}),w.length>0&&a.jsx(O,{children:a.jsxs("div",{className:"flex flex-wrap gap-3 items-end",children:[w.map(t=>a.jsxs("label",{className:"text-xs font-medium text-slate-600 dark:text-slate-300",children:[t.label,a.jsxs("select",{value:j[t.coluna||t.key]||"",onChange:n=>A(l=>({...l,[t.coluna||t.key]:n.target.value})),className:`block border border-slate-300 dark:border-slate-600 dark:bg-slate-700 rounded-lg px-3 py-2 text-sm mt-1 min-w-[160px]`,children:[a.jsx("option",{value:"",children:"Todos"}),t.opcoes.map(n=>a.jsx("option",{value:n.value,children:n.label},n.value))]})]},t.key)),Object.values(j).some(Boolean)&&a.jsx("button",{onClick:()=>A({}),className:`border border-slate-300 dark:border-slate-600 rounded-lg px-3 py-2 text-sm hover:bg-slate-100 dark:hover:bg-slate-700`,children:"✕ Limpar"})]})}),M,I?a.jsx(ne,{texto:`Carregando ${m.toLowerCase()}…`}):c.length===0?a.jsx(O,{children:a.jsx(de,{icone:C,titulo:"Nenhum registro encontrado",descricao:f.length>0?'Clique em "+ Novo" para criar o primeiro registro.':"Ajuste os filtros para ver outros resultados.",acao:f.length>0?a.jsx("button",{onClick:H,className:"bg-blue-600 text-white px-5 py-2 rounded-lg text-sm",children:"+ Criar registro"}):null})}):a.jsx(O,{children:a.jsx(ee,{colunas:re,dados:c,porPagina:25,buscaavel:!0,vazio:`Nenhum registro em ${m}.`})}),_&&a.jsx(ae,{titulo:e?`Editar — ${m}`:`Novo — ${m}`,subtitulo:e?`Registro #${e.id}`:"Preencha os campos abaixo",onFechar:()=>N(!1),largura:"max-w-2xl",rodape:a.jsxs("div",{className:"flex justify-end gap-2",children:[a.jsx("button",{onClick:()=>N(!1),className:"px-5 py-2 rounded-lg text-sm border border-slate-300 dark:border-slate-600",children:"Cancelar"}),a.jsx("button",{onClick:W,disabled:x,className:`px-6 py-2 rounded-lg text-sm bg-blue-600 text-white font-medium hover:bg-blue-700 disabled:opacity-50`,children:x?"Salvando…":"Salvar"})]}),children:a.jsxs("form",{onSubmit:W,className:"space-y-4",children:[F&&a.jsx("div",{role:"alert",className:`bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-300 text-sm p-3 rounded-lg`,children:F}),a.jsx("div",{className:"grid sm:grid-cols-2 gap-4",children:f.map(t=>{const n=t.largura==="full"||t.tipo==="textarea"?"sm:col-span-2":"";return a.jsxs("label",{className:`block text-xs font-medium text-slate-600 dark:text-slate-300 ${n}`,children:[t.label,t.obrigatorio?" *":"",t.tipo==="textarea"?a.jsx("textarea",{rows:t.rows||3,required:t.obrigatorio,value:o[t.key]??"",onChange:l=>i({...o,[t.key]:l.target.value}),placeholder:t.placeholder,className:`w-full border border-slate-300 dark:border-slate-600 dark:bg-slate-700 rounded-lg px-3 py-2 text-sm mt-1`}):t.tipo==="select"?a.jsxs("select",{required:t.obrigatorio,value:o[t.key]??"",onChange:l=>i({...o,[t.key]:l.target.value}),className:`w-full border border-slate-300 dark:border-slate-600 dark:bg-slate-700 rounded-lg px-3 py-2 text-sm mt-1`,children:[a.jsx("option",{value:"",children:"— Selecione —"}),(t.opcoes||[]).map(l=>a.jsx("option",{value:l.value??l,children:l.label??l},l.value??l))]}):t.tipo==="checkbox"?a.jsxs("span",{className:"flex items-center gap-2 mt-2",children:[a.jsx("input",{type:"checkbox",checked:!!o[t.key],onChange:l=>i({...o,[t.key]:l.target.checked}),className:"w-4 h-4"}),a.jsx("span",{className:"text-xs font-normal",children:t.placeholder})]}):t.tipo==="number"?a.jsx("input",{type:"number",step:t.passo||"any",min:t.min,required:t.obrigatorio,value:o[t.key]??"",onChange:l=>i({...o,[t.key]:l.target.value}),placeholder:t.placeholder,className:`w-full border border-slate-300 dark:border-slate-600 dark:bg-slate-700 rounded-lg px-3 py-2 text-sm mt-1`}):a.jsx("input",{type:t.tipo||"text",required:t.obrigatorio,value:o[t.key]??"",onChange:l=>i({...o,[t.key]:l.target.value}),placeholder:t.placeholder,maxLength:t.maxLength,className:`w-full border border-slate-300 dark:border-slate-600 dark:bg-slate-700 rounded-lg px-3 py-2 text-sm mt-1`}),t.ajuda&&a.jsx("span",{className:"block text-[10px] text-slate-400 font-normal mt-1",children:t.ajuda})]},t.key)})})]})})]})}

const ue=[
  {key:"materias_primas",nome:"Matérias-Primas (MP)"},
  {key:"fornecedores",nome:"Fornecedores Homologados"},
  {key:"cotacoes",nome:"Cotações"},
  {key:"produtos",nome:"Catálogo e Estoque"}
];

const me={razao_social:"",cnpj:"",contato:"",telefone:"",email:"",endereco:"",categoria:"",prazo_entrega_dias:"",condicao_pagamento:"",avaliacao:3};
const Y={produto_descricao:"",quantidade:"",unidade:"un",fornecedor_id:"",valor_unitario:"",prazo_entrega:"",condicao_pagamento:"",status:"pendente"};

function je(){
  const{user:u}=Z();
  const[m,z]=d.useState("materias_primas"); // DEFAULT TAB = MATERIAS-PRIMAS
  const[C,q]=d.useState([]);
  const[f,k]=d.useState([]);
  const[w,T]=d.useState([]);
  const[L,$]=d.useState(!0);
  const[P,g]=d.useState(!1);
  const[h,M]=d.useState(null);
  const[r,c]=d.useState(Y);
  const[B,I]=d.useState(!1);

  async function y(){
    $(!0);
    try{
      const[e,s,o]=await Promise.all([
        b.from("fornecedores").select("*").order("razao_social"),
        b.from("cotacoes").select("*, fornecedor:fornecedores(razao_social)").order("criado_em",{ascending:!1}),
        b.from("produtos").select("*").order("nome")
      ]);
      q(e.data||[]);
      k(s.data||[]);
      T(o.data||[]);
    }catch(err){}
    $(!1);
  }

  d.useEffect(()=>{y()},[]);

  function U(){M(null),c(Y),g(!0)}
  function J(e){M(e),c({produto_descricao:e.produto_descricao||"",quantidade:e.quantidade??"",unidade:e.unidade||"un",fornecedor_id:e.fornecedor_id||"",valor_unitario:e.valor_unitario??"",prazo_entrega:e.prazo_entrega||"",condicao_pagamento:e.condicao_pagamento||"",status:e.status||"pendente"}),g(!0)}
  async function j(e){var F;if(e.preventDefault(),!r.produto_descricao.trim())return alert("Informe o produto.");I(!0);const s=Number(r.quantidade)||0,o=Number(r.valor_unitario)||0,i={produto_descricao:r.produto_descricao.trim(),quantidade:s,unidade:r.unidade,fornecedor_id:r.fornecedor_id||null,valor_unitario:o,valor_total:Number((s*o).toFixed(2)),prazo_entrega:r.prazo_entrega||null,condicao_pagamento:r.condicao_pagamento||null,status:r.status};let x,S;if(h)({error:x}=await b.from("cotacoes").update(i).eq("id",h.id)),S=h.id;else{const v=await b.from("cotacoes").insert({...i,criado_por:u==null?void 0:u.id}).select("id").single();x=v.error,S=(F=v.data)==null?void 0:F.id}if(I(!1),x)return alert(x.message);await G({acao:h?"update":"insert",tabela:"cotacoes",registro_id:S,descricao:`${h?"Editou":"Registrou"} cotação: ${i.produto_descricao}`,dados_depois:i}),g(!1),y()}
  async function A(e,s){await b.from("cotacoes").update({status:s,aprovador_id:u==null?void 0:u.id}).eq("id",e.id),await G({acao:"update",tabela:"cotacoes",registro_id:e.id,descricao:`${s==="aprovada"?"Aprovou":"Reprovou"} a cotação de ${e.produto_descricao}`}),y()}

  const _=w.filter(e=>Number(e.estoque_atual)<=Number(e.estoque_minimo));
  const N=[
    {key:"produto_descricao",label:"Produto"},
    {key:"fornecedor",label:"Fornecedor",formato:(e,s)=>{var o;return((o=s.fornecedor)==null?void 0:o.razao_social)||"—"}},
    {key:"quantidade",label:"Qtd",alinhamento:"right",formato:(e,s)=>`${Q(e,2)} ${s.unidade||""}`},
    {key:"valor_unitario",label:"Unitário",alinhamento:"right",formato:e=>E(e)},
    {key:"valor_total",label:"Total",alinhamento:"right",formato:e=>a.jsx("b",{className:"font-mono text-xs",children:E(e)})},
    {key:"prazo_entrega",label:"Entrega",formato:e=>se(e)},
    {key:"status",label:"Status",formato:(e,s)=>a.jsxs("span",{className:"flex items-center gap-2",children:[a.jsx(ie,{cor:e==="aprovada"?"bg-green-100 text-green-800":e==="reprovada"?"bg-red-100 text-red-800":e==="recebida"?"bg-blue-100 text-blue-800":"bg-amber-100 text-amber-800",children:e}),e==="pendente"&&a.jsxs("span",{className:"flex gap-1",children:[a.jsx("button",{onClick:o=>{o.stopPropagation(),A(s,"aprovada")},className:"text-[10px] text-green-700 hover:underline",children:"✓"}),a.jsx("button",{onClick:o=>{o.stopPropagation(),A(s,"reprovada")},className:"text-[10px] text-red-700 hover:underline",children:"✗"})]})]})},
    {key:"__acoes",label:"",ordenavel:!1,alinhamento:"center",formato:(e,s)=>a.jsx("button",{onClick:o=>{o.stopPropagation(),J(s)},className:"text-xs text-blue-600 hover:underline",children:"editar"})}
  ];

  return a.jsxs("div",{
    className:"space-y-5",
    children:[
      a.jsxs("header",{
        children:[
          a.jsx("h1",{className:"text-xl font-bold tracking-tight text-white",children:"Compras & Suprimentos Industriais"}),
          a.jsx("p",{className:"text-sm text-slate-400",children:"Painel de Matérias-Primas, fornecedores homologados, cotações e controle de estoque"})
        ]
      }),
      _.length>0&&a.jsx("div",{
        className:`bg-amber-500/10 border border-amber-500/30 rounded-xl p-4 text-amber-300`,
        children:a.jsxs("div",{
          className:"flex items-start gap-3",
          children:[
            a.jsx("span",{className:"text-xl",children:"⚠️"}),
            a.jsxs("div",{
              className:"flex-1",
              children:[
                a.jsxs("b",{className:"text-sm font-semibold",children:[_.length," produto(s) abaixo do estoque mínimo"]}),
                a.jsxs("p",{className:"text-xs text-amber-400 mt-1",children:[_.slice(0,5).map(e=>e.nome).join(" · "),_.length>5&&` e mais ${_.length-5}`]})
              ]
            }),
            a.jsx("button",{onClick:()=>z("produtos"),className:"bg-amber-600 hover:bg-amber-500 text-white px-3 py-1.5 rounded-lg text-xs whitespace-nowrap",children:"Ver produtos"})
          ]
        })
      }),
      // ABAS NAVEGAÇÃO
      a.jsx("div",{
        className:"flex gap-2 border-b border-slate-700 overflow-x-auto pb-px",
        children:ue.map(e=>a.jsxs("button",{
          key:e.key,
          onClick:()=>z(e.key),
          className:`px-4 py-2.5 text-xs font-semibold whitespace-nowrap border-b-2 transition-colors flex items-center gap-1.5 ${m===e.key?"border-blue-500 text-blue-400 bg-slate-800/40 rounded-t-lg":"border-transparent text-slate-400 hover:text-slate-200"}`,
          children:[
            e.nome,
            e.key==="fornecedores"&&C.length>0&&` (${C.length})`,
            e.key==="cotacoes"&&f.length>0&&` (${f.length})`,
            e.key==="produtos"&&w.length>0&&` (${w.length})`
          ]
        }))
      }),

      // TAB 1: PAINEL DE MATERIAS-PRIMAS (DEFAULT)
      m==="materias_primas"&&a.jsx(PainelMateriasPrimas,{}),

      // TAB 2: FORNECEDORES
      m==="fornecedores"&&a.jsx(X,{
        tabela:"fornecedores",
        titulo:"Fornecedores Homologados",
        icone:"🏭",
        subtitulo:"Cadastro de fornecedores industriais e condições comerciais",
        ordem:{col:"razao_social",asc:!0},
        valoresIniciais:me,
        colunas:[
          {key:"razao_social",label:"Razão social"},
          {key:"cnpj",label:"CNPJ"},
          {key:"contato",label:"Contato",formato:e=>e||"—"},
          {key:"telefone",label:"Telefone",formato:e=>e||"—"},
          {key:"categoria",label:"Categoria",formato:e=>e||"—"},
          {key:"prazo_entrega_dias",label:"Prazo",alinhamento:"right",formato:e=>e?`${e} dias`:"—"},
          {key:"avaliacao",label:"Avaliação",alinhamento:"center",formato:e=>"★".repeat(e||0)+"☆".repeat(5-(e||0))}
        ],
        campos:[
          {key:"razao_social",label:"Razão social",obrigatorio:!0,largura:"full"},
          {key:"cnpj",label:"CNPJ",placeholder:"00.000.000/0000-00",obrigatorio:!0},
          {key:"categoria",label:"Categoria",placeholder:"Ex.: cimento, aço, tintas"},
          {key:"contato",label:"Pessoa de contato"},
          {key:"telefone",label:"Telefone",placeholder:"(11) 3456-7890"},
          {key:"email",label:"E-mail",tipo:"email"},
          {key:"prazo_entrega_dias",label:"Prazo de entrega (dias)",tipo:"number",min:0},
          {key:"condicao_pagamento",label:"Condição de pagamento",placeholder:"Ex.: 28 DDL"},
          {key:"avaliacao",label:"Avaliação (1 a 5)",tipo:"number",min:1,max:5},
          {key:"endereco",label:"Endereço",largura:"full"}
        ],
        kpis:e=>[
          {titulo:"Fornecedores",valor:e.length,icone:"🏭"},
          {titulo:"Prazo médio",valor:e.length?`${Math.round(e.reduce((s,o)=>s+Number(o.prazo_entrega_dias||0),0)/e.length)} dias`:"—",icone:"🚚"},
          {titulo:"Bem avaliados",valor:e.filter(s=>Number(s.avaliacao)>=4).length,icone:"⭐",cor:"text-green-600"}
        ]
      }),

      // TAB 3: COTACOES
      m==="cotacoes"&&a.jsxs("div",{
        className:"space-y-4",
        children:[
          a.jsx("div",{
            className:"flex justify-end",
            children:a.jsx("button",{
              onClick:U,
              className:"bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700",
              children:"+ Nova cotação"
            })
          }),
          a.jsx(O,{
            children:a.jsx(ee,{colunas:N,dados:f,porPagina:25,vazio:"Nenhuma cotação registrada."})
          })
        ]
      }),

      // TAB 4: PRODUTOS E ESTOQUE
      m==="produtos"&&a.jsx(X,{
        tabela:"produtos",
        titulo:"Catálogo e Estoque",
        icone:"📦",
        subtitulo:"Catálogo de materiais com controle de estoque",
        ordem:{col:"nome",asc:!0},
        valoresIniciais:{codigo:"",nome:"",unidade:"un",preco_custo:"",preco_venda:"",estoque_atual:0,estoque_minimo:0,categoria:"",ativo:!0},
        colunas:[
          {key:"codigo",label:"Código"},
          {key:"nome",label:"Produto"},
          {key:"categoria",label:"Categoria",formato:e=>e||"—"},
          {key:"estoque_atual",label:"Estoque",alinhamento:"right",formato:(e,s)=>{const o=Number(e)<=Number(s.estoque_minimo);return a.jsxs("span",{className:o?"text-red-500 font-bold":"",children:[Q(e,2)," ",s.unidade,o&&" ⚠️"]})}},
          {key:"estoque_minimo",label:"Mínimo",alinhamento:"right",formato:e=>Q(e,2)},
          {key:"preco_custo",label:"Custo",alinhamento:"right",formato:e=>E(e)},
          {key:"preco_venda",label:"Venda",alinhamento:"right",formato:e=>E(e)},
          {key:"margem",label:"Margem",alinhamento:"right",ordenavel:!1,formato:(e,s)=>{const o=Number(s.preco_custo||0),i=Number(s.preco_venda||0);if(!o||!i)return"—";const x=(i-o)/o*100;return a.jsxs("span",{className:x>=30?"text-emerald-400":"text-amber-400",children:[Q(x,1),"%"]})}}
        ],
        campos:[
          {key:"codigo",label:"Código",obrigatorio:!0,placeholder:"Ex.: CIM-001"},
          {key:"nome",label:"Nome do produto",obrigatorio:!0},
          {key:"unidade",label:"Unidade",placeholder:"un, sc, m², kg"},
          {key:"categoria",label:"Categoria"},
          {key:"preco_custo",label:"Preço de custo (R$)",tipo:"number",min:0},
          {key:"preco_venda",label:"Preço de venda (R$)",tipo:"number",min:0},
          {key:"estoque_atual",label:"Estoque atual",tipo:"number",min:0},
          {key:"estoque_minimo",label:"Estoque mínimo",tipo:"number",min:0},
          {key:"ativo",label:"Situação",tipo:"checkbox",placeholder:"Produto ativo",largura:"full"}
        ],
        kpis:e=>{
          const s=e.reduce((o,i)=>o+Number(i.estoque_atual||0)*Number(i.preco_custo||0),0);
          return[
            {titulo:"Produtos",valor:e.length,icone:"📦"},
            {titulo:"Valor em estoque",valor:E(s),icone:"💰",cor:"text-emerald-400"},
            {titulo:"Estoque baixo",valor:e.filter(o=>Number(o.estoque_atual)<=Number(o.estoque_minimo)).length,icone:"⚠️",cor:"text-red-400"},
            {titulo:"Inativos",valor:e.filter(o=>o.ativo===!1).length,icone:"🚫"}
          ];
        }
      }),

      // MODAL DE COTACOES (MANTIDO)
      P&&a.jsx(ae,{
        titulo:h?"Editar cotação":"Nova cotação",
        subtitulo:"Registre a cotação de um material com um fornecedor",
        onFechar:()=>g(!1),
        largura:"max-w-2xl",
        rodape:a.jsxs("div",{
          className:"flex justify-end gap-2",
          children:[
            a.jsx("button",{onClick:()=>g(!1),className:"border border-slate-600 px-5 py-2 rounded-lg text-sm text-slate-300",children:"Cancelar"}),
            a.jsx("button",{onClick:j,disabled:B,className:"bg-blue-600 text-white px-6 py-2 rounded-lg text-sm font-medium disabled:opacity-50",children:B?"Salvando…":"Salvar cotação"})
          ]
        }),
        children:a.jsxs("form",{
          onSubmit:j,
          className:"space-y-4",
          children:[
            a.jsxs("div",{
              className:"grid sm:grid-cols-2 gap-4",
              children:[
                a.jsxs("label",{
                  className:"sm:col-span-2 text-xs font-medium text-slate-300",
                  children:[
                    "Produto / descrição *",
                    a.jsx("input",{required:!0,list:"lista-produtos",value:r.produto_descricao,onChange:e=>c({...r,produto_descricao:e.target.value}),placeholder:"Digite ou selecione um produto do catálogo",className:"w-full border border-slate-600 bg-slate-700 rounded-lg px-3 py-2 text-sm mt-1 text-white"}),
                    a.jsx("datalist",{id:"lista-produtos",children:w.map(e=>a.jsxs("option",{value:e.nome,children:[e.codigo," — estoque ",e.estoque_atual," ",e.unidade]},e.id))})
                  ]
                }),
                a.jsxs("label",{
                  className:"text-xs font-medium text-slate-300",
                  children:[
                    "Quantidade *",
                    a.jsx("input",{required:!0,type:"number",step:"0.001",min:"0",value:r.quantidade,onChange:e=>c({...r,quantidade:e.target.value}),className:"w-full border border-slate-600 bg-slate-700 rounded-lg px-3 py-2 text-sm mt-1 text-white"})
                  ]
                }),
                a.jsxs("label",{
                  className:"text-xs font-medium text-slate-300",
                  children:[
                    "Unidade",
                    a.jsx("input",{value:r.unidade,onChange:e=>c({...r,unidade:e.target.value}),className:"w-full border border-slate-600 bg-slate-700 rounded-lg px-3 py-2 text-sm mt-1 text-white"})
                  ]
                }),
                a.jsxs("label",{
                  className:"sm:col-span-2 text-xs font-medium text-slate-300",
                  children:[
                    "Fornecedor",
                    a.jsxs("select",{value:r.fornecedor_id,onChange:e=>c({...r,fornecedor_id:e.target.value}),className:"w-full border border-slate-600 bg-slate-700 rounded-lg px-3 py-2 text-sm mt-1 text-white",children:[
                      a.jsx("option",{value:"",children:"— Selecione —"}),
                      C.map(e=>a.jsxs("option",{value:e.id,children:[e.razao_social," ",e.prazo_entrega_dias?`(${e.prazo_entrega_dias} dias)`:""]},e.id))
                    ]})
                  ]
                }),
                a.jsxs("label",{
                  className:"text-xs font-medium text-slate-300",
                  children:[
                    "Valor unitário (R$)",
                    a.jsx("input",{type:"number",step:"0.01",min:"0",value:r.valor_unitario,onChange:e=>c({...r,valor_unitario:e.target.value}),className:"w-full border border-slate-600 bg-slate-700 rounded-lg px-3 py-2 text-sm mt-1 text-white"})
                  ]
                }),
                a.jsxs("label",{
                  className:"text-xs font-medium text-slate-300",
                  children:[
                    "Prazo de entrega",
                    a.jsx("input",{type:"date",value:r.prazo_entrega,onChange:e=>c({...r,prazo_entrega:e.target.value}),className:"w-full border border-slate-600 bg-slate-700 rounded-lg px-3 py-2 text-sm mt-1 text-white"})
                  ]
                }),
                a.jsxs("label",{
                  className:"text-xs font-medium text-slate-300",
                  children:[
                    "Condição de pagamento",
                    a.jsx("input",{value:r.condicao_pagamento,onChange:e=>c({...r,condicao_pagamento:e.target.value}),placeholder:"Ex.: 28 DDL",className:"w-full border border-slate-600 bg-slate-700 rounded-lg px-3 py-2 text-sm mt-1 text-white"})
                  ]
                }),
                a.jsxs("label",{
                  className:"text-xs font-medium text-slate-300",
                  children:[
                    "Status",
                    a.jsxs("select",{value:r.status,onChange:e=>c({...r,status:e.target.value}),className:"w-full border border-slate-600 bg-slate-700 rounded-lg px-3 py-2 text-sm mt-1 text-white",children:[
                      "pendente","aprovada","reprovada","recebida"
                    ].map(e=>a.jsx("option",{value:e,children:e},e))})
                  ]
                })
              ]
            }),
            a.jsxs("div",{
              className:"bg-blue-900/20 border border-blue-800 rounded-lg p-3 text-sm text-slate-200",
              children:[
                a.jsx("b",{children:"Valor total calculado:"}),
                " ",
                E((Number(r.quantidade)||0)*(Number(r.valor_unitario)||0))
              ]
            })
          ]
        })
      })
    ]
  });
}

export{je as default};