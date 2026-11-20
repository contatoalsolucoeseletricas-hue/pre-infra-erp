import{X as h}from"./main-DCVmCq77.js";function a(o){return String(o??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}async function $(o,i,e,n="relatorio",t={}){const{subtitulo:c="",rodape:m="Pré Infra — Sistema Integrado",orientacao:f="portrait"}=t,b=new Date().toLocaleString("pt-BR"),p=i.length,l=i.map((r,g)=>`
    <tr class="${g%2?"par":""}">
      ${e.map(x=>{const u=r[x.key],v=x.formato?x.formato(u,r):u;return`<td>${a(v)}</td>`}).join("")}
    </tr>`).join(""),s=`<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="utf-8">
<title>${a(o)}</title>
<style>
  @page { size: A4 ${f}; margin: 14mm; }
  * { box-sizing: border-box; }
  body { font-family: Arial, Helvetica, sans-serif; color: #0f172a; margin: 0; padding: 24px; }
  header { border-bottom: 3px solid #3b82f6; padding-bottom: 12px; margin-bottom: 18px;
           display: flex; justify-content: space-between; align-items: flex-end; }
  .marca { font-size: 20px; font-weight: 900; color: #3b82f6; letter-spacing: -.5px; }
  .marca span { color: #0f172a; }
  h1 { font-size: 17px; margin: 0 0 4px; }
  .sub { font-size: 12px; color: #64748b; }
  .meta { font-size: 11px; color: #64748b; text-align: right; line-height: 1.6; }
  table { width: 100%; border-collapse: collapse; font-size: 11px; }
  th { background: #f1f5f9; text-align: left; padding: 8px 6px; border: 1px solid #cbd5e1;
       font-weight: 700; text-transform: uppercase; font-size: 10px; letter-spacing: .3px; }
  td { padding: 7px 6px; border: 1px solid #e2e8f0; vertical-align: top; }
  tr.par td { background: #f8fafc; }
  tfoot td { font-weight: 700; background: #eff6ff; }
  footer { margin-top: 22px; padding-top: 10px; border-top: 1px solid #e2e8f0;
           font-size: 10px; color: #64748b; display: flex; justify-content: space-between; }
  .assinatura { margin-top: 40px; display: flex; gap: 40px; font-size: 11px; }
  .assinatura div { flex: 1; border-top: 1px solid #94a3b8; padding-top: 6px; text-align: center; }
</style>
</head>
<body>
  <header>
    <div>
      <div class="marca">PRÉ <span>INFRA</span></div>
      <h1>${a(o)}</h1>
      ${c?`<div class="sub">${a(c)}</div>`:""}
    </div>
    <div class="meta">
      Emitido em ${b}<br>
      ${p} registro${p===1?"":"s"}
    </div>
  </header>

  <table>
    <thead>
      <tr>${e.map(r=>`<th>${a(r.label)}</th>`).join("")}</tr>
    </thead>
    <tbody>${l||`<tr><td colspan="${e.length}" style="text-align:center;padding:24px;color:#94a3b8">Nenhum registro no período</td></tr>`}</tbody>
    ${t.totais?`<tfoot><tr>${t.totais.map(r=>`<td>${a(r)}</td>`).join("")}</tr></tfoot>`:""}
  </table>

  ${t.assinaturas?`<div class="assinatura">
    <div>Responsável</div><div>Gestor</div><div>Cliente</div>
  </div>`:""}

  <footer>
    <span>${a(m)}</span>
    <span>Documento gerado eletronicamente · Auditado conforme LGPD Art. 37</span>
  </footer>

  <script>window.onload = function(){ setTimeout(function(){ window.print(); }, 350); };<\/script>
</body>
</html>`,d=window.open("","_blank");if(!d){alert("Bloqueador de pop-up impediu a geração do PDF. Permita pop-ups para este site.");return}d.document.write(s),d.document.close(),await h(n,"pdf",p)}async function R(o,i,e,n="relatorio"){const t=s=>`"${String(s??"").replace(/"/g,'""')}"`,c=e.map(s=>t(s.label)).join(";"),m=i.map(s=>e.map(d=>{const r=s[d.key],g=d.formato?d.formato(r,s):r;return t(g)}).join(";")),f="\uFEFF"+[c,...m].join(`\r
`),b=new Blob([f],{type:"text/csv;charset=utf-8;"}),p=URL.createObjectURL(b),l=document.createElement("a");l.href=p,l.download=`${n}-${new Date().toISOString().slice(0,10)}.csv`,document.body.appendChild(l),l.click(),document.body.removeChild(l),URL.revokeObjectURL(p),await h(n,"csv",i.length)}async function z(o,i){const e=new Blob([JSON.stringify(i,null,2)],{type:"application/json"}),n=URL.createObjectURL(e),t=document.createElement("a");t.href=n,t.download=`${o}-${new Date().toISOString().slice(0,10)}.json`,document.body.appendChild(t),t.click(),document.body.removeChild(t),URL.revokeObjectURL(n)}function w({nome:o,treinamento:i,cargaHoraria:e,codigo:n,emitidoEm:t}){const c=`${window.location.origin}/validar-certificado/${n}`,m=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(c)}`;return`<!DOCTYPE html><html lang="pt-BR"><head><meta charset="utf-8">
<title>Certificado — ${a(o)}</title>
<style>
  @page { size: A4 landscape; margin: 0; }
  body { margin:0; font-family: Georgia, 'Times New Roman', serif; }
  .cert { width: 297mm; height: 210mm; padding: 18mm; box-sizing: border-box;
          border: 12px solid #3b82f6; background:#fff; position: relative; }
  .cert::after { content:''; position:absolute; inset:6mm; border:2px solid #cbd5e1; pointer-events:none; }
  .topo { text-align:center; margin-bottom: 6mm; }
  .marca { font-family: Arial, sans-serif; font-size: 22px; font-weight: 900; color:#3b82f6; letter-spacing:-.5px; }
  h1 { font-size: 34px; margin: 6mm 0 2mm; letter-spacing: 2px; color:#0f172a; }
  .sub { font-size: 13px; color:#64748b; letter-spacing: 4px; text-transform: uppercase; }
  .corpo { font-size: 16px; line-height: 1.9; text-align:center; margin: 8mm 0; color:#1e293b; }
  .nome { font-size: 30px; font-weight: 700; color:#0f172a; border-bottom: 2px solid #3b82f6;
          display:inline-block; padding: 0 8mm 2mm; margin: 3mm 0; }
  .treinamento { font-weight: 700; color:#2563eb; }
  .rodape { position:absolute; bottom: 24mm; left: 18mm; right: 18mm;
            display:flex; justify-content:space-between; align-items:flex-end; }
  .assin { text-align:center; font-size: 12px; }
  .linha { border-top: 1px solid #94a3b8; width: 70mm; padding-top: 2mm; margin-bottom: 1mm; }
  .qr { text-align:center; font-size: 9px; color:#64748b; font-family: Arial, sans-serif; }
  .codigo { font-family: monospace; font-size: 9px; word-break: break-all; max-width: 60mm; }
</style></head>
<body>
  <div class="cert">
    <div class="topo">
      <div class="marca">PRÉ INFRA</div>
      <h1>CERTIFICADO</h1>
      <div class="sub">Conclusão de Treinamento</div>
    </div>

    <div class="corpo">
      Certificamos que<br>
      <span class="nome">${a(o)}</span><br>
      concluiu com aproveitamento o treinamento<br>
      <span class="treinamento">${a(i)}</span><br>
      com carga horária de ${a(e)} hora(s).
    </div>

    <div class="rodape">
      <div class="assin">
        <div class="linha"></div>
        Responsável pelo Treinamento
      </div>
      <div class="qr">
        <img src="${m}" alt="QR de validação" width="110" height="110"><br>
        Valide em /validar-certificado<br>
        <span class="codigo">${a(n)}</span>
      </div>
      <div class="assin">
        <div class="linha"></div>
        Emitido em ${new Date(t||Date.now()).toLocaleDateString("pt-BR")}
      </div>
    </div>
  </div>
</body></html>`}async function j(o){const i=w(o),e=window.open("","_blank");if(!e){alert("Permita pop-ups para gerar o certificado.");return}e.document.write(i),e.document.close(),await h("treinamento_certificados","pdf",1)}export{$ as a,z as b,R as e,j as i};
