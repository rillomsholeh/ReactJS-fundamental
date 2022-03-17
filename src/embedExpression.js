import React from "react";

function EmbedExpression() {
  //Create function here | bisa untuk menambahkan function didalam function embed expression
  function getBatch() {
    return "Batch30-Dumbways.id";
  }

  function embed() {
    return "getEmbedExpression";
  }

  //Create a variable here
  const Nama = "Sholeh";
  let jurusanKuliah = "Tehnik Informatika";

  // variable aray
  const namaMahasiswa = ["muhammad sholeh", "ahmad zawawi", "slamet budiono"];

  return (
    // Code Inside div
    <div>
      <h2>hallo {embed()}</h2>
      <h3>Muhammad {Nama}</h3>
      <h1>{jurusanKuliah}</h1>
      <p>{getBatch()}</p>

      {/* menampilkan variable array namaMahasiswa */}
      <h4>
        {namaMahasiswa[0]}
        <br />
        {namaMahasiswa[1]}
      </h4>
    </div>
  );
}

// export default embedExpresion
export default EmbedExpression;
