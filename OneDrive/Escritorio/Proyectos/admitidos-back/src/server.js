import express from "express";

const app = express();

app.use(express.json());

const PORT = Number(process.env.PORT);
const HOST = process.env.HOST;
const APP_NAME = process.env.APP_NAME;




app.get("/api/health", (req, res) => {
});





const facultades =[
    { id: 1, name: "Facultad de Ingeniería" },
    { id: 2, name: "Facultad de Ciencias Sociales" },
    { id: 3, name: "Facultad de Cienscias de la Salud" },
    { id: 4, name: "Facultad de Arquitectura y Urbanismo" },
];

const {
    codigo,
    facultadId,
    name,
    nivel,
    
} = req.body;

if (!codigo || !facultadId || !name || !nivel) {
    return res.status(422).json({
        statuscode: 422,
        success: false,
        message: "los campos codigo, facultadId, name y nivel son obligatorios",
    });
}

const facultad = facultades.some(facultad => facultad.id === facultadId);
if (!facultad) {
    return res.status(404).json({
        statuscode: 404,
        success: false,
        message: "La facultad con id ${facultadId} no existe",
    });
}

const newPrograma = {
    id: nextProgramaID++,
    codigo,
    facultadId,
    name,
    nivel,
    createdBy: "System",
    createdAt: new Date().toISOString(),
};

programas.push(newPrograma);
return res.status(201).json({
    statuscode: 201,
    success: true,
    data: newPrograma,
});

const programas = [
  { id: 1, codigo: "DS", facultadId: 1, name: "Tecnología en Desarrollo de Software", nivel: "Tecnológico", createdBy: "System", createdAt: new Date().toISOString() },
  { id: 2, codigo: "IS", facultadId: 1, name: "Ingeniería de Sistemas y Telecomunicaciones", nivel: "Pregrado", createdBy: "System", createdAt: new Date().toISOString() },
  { id: 3, codigo: "II", facultadId: 1, name: "Ingeniería Industrial", nivel: "Pregrado", createdBy: "System", createdAt: new Date().toISOString() },
  { id: 4, codigo: "PS", facultadId: 2, name: "Psicología", nivel: "Pregrado", createdBy: "System", createdAt: new Date().toISOString() },
];

let nextProgramaID = 5;

app.get("/api/facultades", (req, res) => { 
    res.json({
        statuscode: 200,
        data: facultades
    });
});

app.get("/api/programas", (req, res) => { 
    res.json({
        statuscode: 200,
        data: programas
    });
});

app.post("/api/programas/store", (req, res) => {
    console.log(req.body);

    res.json({
        statuscode: 201,
        success: true,
        recibido: req.body,
    });
});

app.listen(PORT, HOST, () => {
    console.log(APP_NAME);
    console.log(`Server is running on http://${HOST}:${PORT}`);
}); 




