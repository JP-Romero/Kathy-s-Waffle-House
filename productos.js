/**
 * ═══════════════════════════════════════════════════════════════
 *  BASE DE DATOS DE PRODUCTOS — Kathy's Waffle House
 * ═══════════════════════════════════════════════════════════════
 *
 *  📌 CÓMO AGREGAR UN PRODUCTO NUEVO:
 *     1. Copia uno de los bloques { } de abajo
 *     2. Pégalo antes del corchete ] final
 *     3. Asegúrate de separarlo con una coma del anterior
 *     4. Cambia los datos (id, nombre, precio, etc.)
 *
 *  📌 CAMPOS DISPONIBLES:
 *     id          → Número único (no repitas ninguno)
 *     categoria   → "Waffles" | "Pancakes" |"Especiales de la casa" |"Cereal Caliente" |"Omelets" |"Huevos" |
					 "Bagels" |"Platos de Frutas" |"Sandwiches" |"Hamburguesas" |"Ensaladas" |"Aperitivos" |
					 "Sopas" |"Platos Fuertes" |"Postres" |"Extras" |"Bebidas" |"Combos" | la que quieras
 *     nombre      → Nombre del producto
 *     descripcion → Descripción corta (1-2 oraciones)
 *     precio      → Número con decimales  Ej: 5.50
 *     imagen      → URL de la foto  Ej: "./images/waffle-clasico.jpg"
 *     destacado   → true = aparece con ⭐ | false = normal
 *     disponible  → true = visible en la tienda | false = oculto
 *
 *  📌 IMÁGENES:
 *     Opción A (recomendada): sube tus fotos a la carpeta /images
 *                             en GitHub y usa  "./images/foto.jpg"
 *     Opción B: pega cualquier URL pública de internet
 * ═══════════════════════════════════════════════════════════════
 */

const PRODUCTOS = [

  // ─────────────────────────────
  //  CATEGORÍA: Waffles
  // ─────────────────────────────
  {
    id:          1,
    categoria:   "Waffles",
    nombre:      "#1 Waffle Clásico",
    descripcion: "Esponjoso y dorado con mantequilla fresca y sirope de maple.",
    precio:      5.50,
    imagen:      "https://images.unsplash.com/photo-1562376552-0d160a2f238d?w=600&q=80",
    destacado:   true,
    disponible:  true
  },
  {
    id:          2,
    categoria:   "Waffles",
    nombre:      "#2 Waffles con Nueces o Almendras",
    descripcion: "Cobertura de fresas frescas, crema chantilly y azúcar glass.",
    precio:      7.00,
    imagen:      "https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=600&q=80",
    destacado:   true,
    disponible:  true
  },
  {
    id:          3,
    categoria:   "Waffles",
    nombre:      "#3 Waffle con Chocolate",
    descripcion: "Bañado de salsa de chocolate artesanal y Chispas de Chocolate con mantequilla y sirope de maple.",
    precio:      7.50,
    imagen:      "./images/Waffle con Chocolate.jpeg",
    destacado:   false,
    disponible:  true
  },
  {
    id:          4, 
    categoria:   "Waffles",
    nombre:      "#4 Waffle con Arandanos",
    descripcion: "Queso cheddar derretido, jamón ahumado y huevo revuelto.",
    precio:      8.00,
    imagen:      "https://images.unsplash.com/photo-1506084868230-bb9d95c24759?w=600&q=80",
    destacado:   false,
    disponible:  true
  },

  // ─────────────────────────────
  //  CATEGORÍA: Pancakes
  // ─────────────────────────────
  {
    id:          5,
    categoria:   "Pancakes",
    nombre:      "#5 Pancakes Clásicos",
    descripcion: "Mix de blueberries, fresas y frambuesas con coulis casero.",
    precio:      7.50,
    imagen:      "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=600&q=80",
    destacado:   false,
    disponible:  true
  },
  {
    id:          6,
    categoria:   "Pancakes",
    nombre:      "#6 Pancakes con Chocolate",
    descripcion: "Esponjoso y dorado con mantequilla fresca y miel de maple artesanal.",
    precio:      5.50,
    imagen:      "https://images.unsplash.com/photo-1562376552-0d160a2f238d?w=600&q=80",
    destacado:   true,
    disponible:  true
  },
  {
    id:          7,
    categoria:   "Pancakes",
    nombre:      "#7 Pancakes con Banano",
    descripcion: "Esponjoso y dorado con mantequilla fresca y miel de maple artesanal.",
    precio:      5.50,
    imagen:      "https://images.unsplash.com/photo-1562376552-0d160a2f238d?w=600&q=80",
    destacado:   true,
    disponible:  true
  },
  {
    id:          8,
    categoria:   "Pancakes",
    nombre:      "#8 Pancakes con Manzana",
    descripcion: "Esponjoso y dorado con mantequilla fresca y miel de maple artesanal.",
    precio:      5.50,
    imagen:      "https://images.unsplash.com/photo-1562376552-0d160a2f238d?w=600&q=80",
    destacado:   true,
    disponible:  true
  },
  {
    id:          9,
    categoria:   "Pancakes",
    nombre:      "#9 Pancakes con Piña",
    descripcion: "Esponjoso y dorado con mantequilla fresca y miel de maple artesanal.",
    precio:      5.50,
    imagen:      "https://images.unsplash.com/photo-1562376552-0d160a2f238d?w=600&q=80",
    destacado:   true,
    disponible:  true
  },
  {
    id:          10,
    categoria:   "Pancakes",
    nombre:      "#10 Pancakes con Fresa",
    descripcion: "Esponjoso y dorado con mantequilla fresca y miel de maple artesanal.",
    precio:      5.50,
    imagen:      "https://images.unsplash.com/photo-1562376552-0d160a2f238d?w=600&q=80",
    destacado:   true,
    disponible:  true
  },
  {
    id:          11,
    categoria:   "Pancakes",
    nombre:      "#11 Pancakes con Tocino",
    descripcion: "Esponjoso y dorado con mantequilla fresca y miel de maple artesanal.",
    precio:      5.50,
    imagen:      "https://images.unsplash.com/photo-1562376552-0d160a2f238d?w=600&q=80",
    destacado:   true,
    disponible:  true
  },
  {
    id:          12,
    categoria:   "Pancakes",
    nombre:      "#12 Pancakes con Nueces o Almendras",
    descripcion: "Esponjoso y dorado con mantequilla fresca y miel de maple artesanal.",
    precio:      5.50,
    imagen:      "https://images.unsplash.com/photo-1562376552-0d160a2f238d?w=600&q=80",
    destacado:   true,
    disponible:  true
  },
  {
    id:          13,
    categoria:   "Pancakes",
    nombre:      "#13 Pancakes con Arandanos",
    descripcion: "Esponjoso y dorado con mantequilla fresca y miel de maple artesanal.",
    precio:      5.50,
    imagen:      "https://images.unsplash.com/photo-1562376552-0d160a2f238d?w=600&q=80",
    destacado:   true,
    disponible:  true
  },
  
  // ─────────────────────────────
  //  CATEGORÍA: Especiales de la casa
  // ─────────────────────────────
  {
    id:          14,
    categoria:   "Especiales de la casa",
    nombre:      "#14 Tostadas Francesas",
    descripcion: "Esponjoso y dorado con mantequilla fresca y miel de maple artesanal.",
    precio:      5.50,
    imagen:      "https://images.unsplash.com/photo-1562376552-0d160a2f238d?w=600&q=80",
    destacado:   true,
    disponible:  true
  },
  {
    id:          15,
    categoria:   "Especiales de la casa",
    nombre:      "#15 Pancakes, 3 Huevos y Tocino",
    descripcion: "Esponjoso y dorado con mantequilla fresca y miel de maple artesanal.",
    precio:      5.50,
    imagen:      "https://images.unsplash.com/photo-1562376552-0d160a2f238d?w=600&q=80",
    destacado:   true,
    disponible:  true
  },
  {
    id:          16,
    categoria:   "Especiales de la casa",
    nombre:      "#16 Pancakes, 2 Huevos Revueltos, Tomate, Chiltoma, Cebolla y Champiñones.",
    descripcion: "Esponjoso y dorado con mantequilla fresca y miel de maple artesanal.",
    precio:      5.50,
    imagen:      "https://images.unsplash.com/photo-1562376552-0d160a2f238d?w=600&q=80",
    destacado:   true,
    disponible:  true
  },
  
  // ─────────────────────────────
  //  CATEGORÍA: Cereal Caliente
  // ─────────────────────────────
  {
    id:          17,
    categoria:   "Cereal Caliente",
    nombre:      "#17 Cereal de Avena, con Banano y Pasas.",
    descripcion: "Esponjoso y dorado con mantequilla fresca y miel de maple artesanal.",
    precio:      5.50,
    imagen:      "https://images.unsplash.com/photo-1562376552-0d160a2f238d?w=600&q=80",
    destacado:   true,
    disponible:  true
  },
  
  // ─────────────────────────────
  //  CATEGORÍA: Omelets
  // ─────────────────────────────
  {
    id:          18,
    categoria:   "Omelets",
    nombre:      "#18 Omelet con Champiñones y Queso, Papas Caseras, Tostada.",
    descripcion: "Esponjoso y dorado con mantequilla fresca y miel de maple artesanal.",
    precio:      5.50,
    imagen:      "https://images.unsplash.com/photo-1562376552-0d160a2f238d?w=600&q=80",
    destacado:   true,
    disponible:  true
  },
  {
    id:          19,
    categoria:   "Omelets",
    nombre:      "#19 Omelet con Champiñones, Cebolla, Tomate y Chiltoma, Papas Caseras, Tostada.",
    descripcion: "Esponjoso y dorado con mantequilla fresca y miel de maple artesanal.",
    precio:      5.50,
    imagen:      "https://images.unsplash.com/photo-1562376552-0d160a2f238d?w=600&q=80",
    destacado:   true,
    disponible:  true
  },
  {
    id:          20,
    categoria:   "Omelets",
    nombre:      "#20 Omelet con Queso, Papas Caseras, Tostada.",
    descripcion: "Esponjoso y dorado con mantequilla fresca y miel de maple artesanal.",
    precio:      5.50,
    imagen:      "https://images.unsplash.com/photo-1562376552-0d160a2f238d?w=600&q=80",
    destacado:   true,
    disponible:  true
  },
  {
    id:          21,
    categoria:   "Omelets",
    nombre:      "#21 Omelet con Tocino y Queso, Papas Caseras, Tostada.",
    descripcion: "Esponjoso y dorado con mantequilla fresca y miel de maple artesanal.",
    precio:      5.50,
    imagen:      "https://images.unsplash.com/photo-1562376552-0d160a2f238d?w=600&q=80",
    destacado:   true,
    disponible:  true
  },
  {
    id:          22,
    categoria:   "Omelets",
    nombre:      "#22 Omelet con jamón y Queso, Papas Caseras, Tostada.",
    descripcion: "Esponjoso y dorado con mantequilla fresca y miel de maple artesanal.",
    precio:      5.50,
    imagen:      "https://images.unsplash.com/photo-1562376552-0d160a2f238d?w=600&q=80",
    destacado:   true,
    disponible:  true
  },
  {
    id:          23,
    categoria:   "Omelets",
    nombre:      "#23 Omelet western con jamón y Queso, Tomate, Cebolla, Chiltoma, Papas Caseras, Tostada.",
    descripcion: "Esponjoso y dorado con mantequilla fresca y miel de maple artesanal.",
    precio:      5.50,
    imagen:      "https://images.unsplash.com/photo-1562376552-0d160a2f238d?w=600&q=80",
    destacado:   true,
    disponible:  true
  },
  
  // ─────────────────────────────
  //  CATEGORÍA: Huevos
  // ─────────────────────────────
  {
    id:          24,
    categoria:   "Huevos",
    nombre:      "#24 (3) Huevos, Tocino, Papas Caseras, y Tostada.",
    descripcion: "Esponjoso y dorado con mantequilla fresca y miel de maple artesanal.",
    precio:      5.50,
    imagen:      "https://images.unsplash.com/photo-1562376552-0d160a2f238d?w=600&q=80",
    destacado:   true,
    disponible:  true
  },
  {
    id:          25,
    categoria:   "Huevos",
    nombre:      "#25 (2) Huevos, Tocino, Papas Caseras, y Tostada.",
    descripcion: "Esponjoso y dorado con mantequilla fresca y miel de maple artesanal.",
    precio:      5.50,
    imagen:      "https://images.unsplash.com/photo-1562376552-0d160a2f238d?w=600&q=80",
    destacado:   true,
    disponible:  true
  },
  {
    id:          26,
    categoria:   "Huevos",
    nombre:      "#26 (2) Huevos, Tocino, Gallo Pinto, y Tostada.",
    descripcion: "Esponjoso y dorado con mantequilla fresca y miel de maple artesanal.",
    precio:      5.50,
    imagen:      "https://images.unsplash.com/photo-1562376552-0d160a2f238d?w=600&q=80",
    destacado:   true,
    disponible:  true
  },
  {
    id:          27,
    categoria:   "Huevos",
    nombre:      "#27 (2) Huevos, Tocino, Papas Caseras, y Tostada.",
    descripcion: "Esponjoso y dorado con mantequilla fresca y miel de maple artesanal.",
    precio:      5.50,
    imagen:      "https://images.unsplash.com/photo-1562376552-0d160a2f238d?w=600&q=80",
    destacado:   true,
    disponible:  true
  },
  {
    id:          28,
    categoria:   "Huevos",
    nombre:      "#28 (2) Huevos, Gallo Pinto, y Tostada.",
    descripcion: "Esponjoso y dorado con mantequilla fresca y miel de maple artesanal.",
    precio:      5.50,
    imagen:      "https://images.unsplash.com/photo-1562376552-0d160a2f238d?w=600&q=80",
    destacado:   true,
    disponible:  true
  },
  {
    id:          29,
    categoria:   "Huevos",
    nombre:      "#29 (2) Huevos Revueltos con jamón y Queso Amarillo, Gallo Pinto y Tostada.",
    descripcion: "Esponjoso y dorado con mantequilla fresca y miel de maple artesanal.",
    precio:      5.50,
    imagen:      "https://images.unsplash.com/photo-1562376552-0d160a2f238d?w=600&q=80",
    destacado:   true,
    disponible:  true
  },
  {
    id:          30,
    categoria:   "Huevos",
    nombre:      "#30 (2) Huevos Rancheros (Salsa Picante), Papas Caseras o Gallo Pinto y Tostada.",
    descripcion: "Esponjoso y dorado con mantequilla fresca y miel de maple artesanal.",
    precio:      5.50,
    imagen:      "https://images.unsplash.com/photo-1562376552-0d160a2f238d?w=600&q=80",
    destacado:   true,
    disponible:  true
  },
  {
    id:          31,
    categoria:   "Huevos",
    nombre:      "#31 (2) Huevos y Tostada.",
    descripcion: "Esponjoso y dorado con mantequilla fresca y miel de maple artesanal.",
    precio:      5.50,
    imagen:      "https://images.unsplash.com/photo-1562376552-0d160a2f238d?w=600&q=80",
    destacado:   true,
    disponible:  true
  },
  {
    id:          32,
    categoria:   "Huevos",
    nombre:      "#32 (2) Huevos, Gallo Pinto, Maduro y Queso Frito.",
    descripcion: "Esponjoso y dorado con mantequilla fresca y miel de maple artesanal.",
    precio:      5.50,
    imagen:      "https://images.unsplash.com/photo-1562376552-0d160a2f238d?w=600&q=80",
    destacado:   true,
    disponible:  true
  },
  {
    id:          33,
    categoria:   "Huevos",
    nombre:      "#33 (3) Huevos Revueltos con Cebolla Caramelizadas, Papas Caseras, Tocino y Tostada.",
    descripcion: "Esponjoso y dorado con mantequilla fresca y miel de maple artesanal.",
    precio:      5.50,
    imagen:      "https://images.unsplash.com/photo-1562376552-0d160a2f238d?w=600&q=80",
    destacado:   true,
    disponible:  true
  },
  
  // ─────────────────────────────
  //  CATEGORÍA: Bagels
  // ─────────────────────────────
  {
    id:          34,
    categoria:   "Bagels",
    nombre:      "#34 Bagel con Queso Crema",
    descripcion: "Esponjoso y dorado con mantequilla fresca y miel de maple artesanal.",
    precio:      5.50,
    imagen:      "https://images.unsplash.com/photo-1562376552-0d160a2f238d?w=600&q=80",
    destacado:   true,
    disponible:  true
  },
  {
    id:          35,
    categoria:   "Bagels",
    nombre:      "#35 Bagel con Queso Crema, 2 Huevos",
    descripcion: "Esponjoso y dorado con mantequilla fresca y miel de maple artesanal.",
    precio:      5.50,
    imagen:      "https://images.unsplash.com/photo-1562376552-0d160a2f238d?w=600&q=80",
    destacado:   true,
    disponible:  true
  },
  {
    id:          36,
    categoria:   "Bagels",
    nombre:      "#41 Bagel, Queso Provolone, Huevo y Jamón.",
    descripcion: "Esponjoso y dorado con mantequilla fresca y miel de maple artesanal.",
    precio:      5.50,
    imagen:      "https://images.unsplash.com/photo-1562376552-0d160a2f238d?w=600&q=80",
    destacado:   true,
    disponible:  true
  },
  // ─────────────────────────────
  //  CATEGORÍA: Platos de Frutas
  // ─────────────────────────────
  {
    id:          37,
    categoria:   "Platos de Frutas",
    nombre:      "#36 Plato con Frutas, Yogurt y Granola.",
    descripcion: "Esponjoso y dorado con mantequilla fresca y miel de maple artesanal.",
    precio:      5.50,
    imagen:      "https://images.unsplash.com/photo-1562376552-0d160a2f238d?w=600&q=80",
    destacado:   true,
    disponible:  true
  },
  {
    id:          38,
    categoria:   "Platos de Frutas",
    nombre:      "#37 Plato con Frutas.",
    descripcion: "Esponjoso y dorado con mantequilla fresca y miel de maple artesanal.",
    precio:      5.50,
    imagen:      "https://images.unsplash.com/photo-1562376552-0d160a2f238d?w=600&q=80",
    destacado:   true,
    disponible:  true
  },
  
  // ─────────────────────────────
  //  CATEGORÍA: Sandwiches
  // ─────────────────────────────
  {
    id:          39,
    categoria:   "Sandwiches",
    nombre:      "#38 B.L.T (Tocino, Lechuga y Tomate).",
    descripcion: "Esponjoso y dorado con mantequilla fresca y miel de maple artesanal.",
    precio:      5.50,
    imagen:      "https://images.unsplash.com/photo-1562376552-0d160a2f238d?w=600&q=80",
    destacado:   true,
    disponible:  true
  },
  {
    id:          40,
    categoria:   "Sandwiches",
    nombre:      "#39 Jamón-Pollo-B.L.T, con Queso Amarillo, Lechuga, y Cebolla.",
    descripcion: "Esponjoso y dorado con mantequilla fresca y miel de maple artesanal.",
    precio:      5.50,
    imagen:      "https://images.unsplash.com/photo-1562376552-0d160a2f238d?w=600&q=80",
    destacado:   true,
    disponible:  true
  },
  {
    id:          41,
    categoria:   "Sandwiches",
    nombre:      "#40 Sandwich Super Club.",
    descripcion: "Esponjoso y dorado con mantequilla fresca y miel de maple artesanal.",
    precio:      5.50,
    imagen:      "https://images.unsplash.com/photo-1562376552-0d160a2f238d?w=600&q=80",
    destacado:   true,
    disponible:  true
  },
  {
    id:          42,
    categoria:   "Sandwiches",
    nombre:      "#42 Sandwich de Queso.",
    descripcion: "Esponjoso y dorado con mantequilla fresca y miel de maple artesanal.",
    precio:      5.50,
    imagen:      "https://images.unsplash.com/photo-1562376552-0d160a2f238d?w=600&q=80",
    destacado:   true,
    disponible:  true
  },
  {
    id:          43,
    categoria:   "Sandwiches",
    nombre:      "#43 Sandwich de Jamón y Queso.",
    descripcion: "Esponjoso y dorado con mantequilla fresca y miel de maple artesanal.",
    precio:      5.50,
    imagen:      "https://images.unsplash.com/photo-1562376552-0d160a2f238d?w=600&q=80",
    destacado:   true,
    disponible:  true
  },
  {
    id:          44,
    categoria:   "Sandwiches",
    nombre:      "#44 Sandwich de Pollo con Lechuga, Tomate y Cebolla.",
    descripcion: "Esponjoso y dorado con mantequilla fresca y miel de maple artesanal.",
    precio:      5.50,
    imagen:      "https://images.unsplash.com/photo-1562376552-0d160a2f238d?w=600&q=80",
    destacado:   true,
    disponible:  true
  },
  
  // ─────────────────────────────
  //  CATEGORÍA: Hamburguesas
  // ─────────────────────────────
  {
    id:          45,
    categoria:   "Hamburguesas",
    nombre:      "#45 Hamburguesa de Pollo y Queso con Papas Francesas.",
    descripcion: "Esponjoso y dorado con mantequilla fresca y miel de maple artesanal.",
    precio:      5.50,
    imagen:      "https://images.unsplash.com/photo-1562376552-0d160a2f238d?w=600&q=80",
    destacado:   true,
    disponible:  true
  },
  {
    id:          46,
    categoria:   "Hamburguesas",
    nombre:      "#46 Hamburguesa de Res y Queso con Papas Francesas.",
    descripcion: "Esponjoso y dorado con mantequilla fresca y miel de maple artesanal.",
    precio:      5.50,
    imagen:      "https://images.unsplash.com/photo-1562376552-0d160a2f238d?w=600&q=80",
    destacado:   true,
    disponible:  true
  },
  {
    id:          47,
    categoria:   "Hamburguesas",
    nombre:      "#47 Hamburguesa Kathy. (Tocino, Queso, Champiñones y Papas Francesas).",
    descripcion: "Esponjoso y dorado con mantequilla fresca y miel de maple artesanal.",
    precio:      5.50,
    imagen:      "https://images.unsplash.com/photo-1562376552-0d160a2f238d?w=600&q=80",
    destacado:   true,
    disponible:  true
  },
  
  // ─────────────────────────────
  //  CATEGORÍA: Ensaladas
  // ─────────────────────────────
  {
    id:          48,
    categoria:   "Ensaladas",
    nombre:      "#48 Ensalada de la Casa con Pollo y Especias.",
    descripcion: "Esponjoso y dorado con mantequilla fresca y miel de maple artesanal.",
    precio:      5.50,
    imagen:      "https://images.unsplash.com/photo-1562376552-0d160a2f238d?w=600&q=80",
    destacado:   true,
    disponible:  true
  },
  {
    id:          49,
    categoria:   "Ensaladas",
    nombre:      "#49 Ensalada de la Casa con Pechuga de Pollo y Champiñones.",
    descripcion: "Esponjoso y dorado con mantequilla fresca y miel de maple artesanal.",
    precio:      5.50,
    imagen:      "https://images.unsplash.com/photo-1562376552-0d160a2f238d?w=600&q=80",
    destacado:   true,
    disponible:  true
  },
  {
    id:          50,
    categoria:   "Ensaladas",
    nombre:      "#50 Ensalada Vegetariana de la Casa con Aderezo Italiano.",
    descripcion: "Esponjoso y dorado con mantequilla fresca y miel de maple artesanal.",
    precio:      5.50,
    imagen:      "https://images.unsplash.com/photo-1562376552-0d160a2f238d?w=600&q=80",
    destacado:   true,
    disponible:  true
  },
  {
    id:          51,
    categoria:   "Ensaladas",
    nombre:      "#51 Ensalada Cesar con Pollo.",
    descripcion: "Esponjoso y dorado con mantequilla fresca y miel de maple artesanal.",
    precio:      5.50,
    imagen:      "https://images.unsplash.com/photo-1562376552-0d160a2f238d?w=600&q=80",
    destacado:   true,
    disponible:  true
  },
  {
    id:          52,
    categoria:   "Ensaladas",
    nombre:      "#52 Ensalada Cesar de la Casa con Pollo y Tomate.",
    descripcion: "Esponjoso y dorado con mantequilla fresca y miel de maple artesanal.",
    precio:      5.50,
    imagen:      "https://images.unsplash.com/photo-1562376552-0d160a2f238d?w=600&q=80",
    destacado:   true,
    disponible:  true
  },
  {
    id:          53,
    categoria:   "Ensaladas",
    nombre:      "#53 Ensalada del Chef con Pollo.",
    descripcion: "Esponjoso y dorado con mantequilla fresca y miel de maple artesanal.",
    precio:      5.50,
    imagen:      "https://images.unsplash.com/photo-1562376552-0d160a2f238d?w=600&q=80",
    destacado:   true,
    disponible:  true
  },
  
  // ─────────────────────────────
  //  CATEGORÍA: Sopas
  // ─────────────────────────────
  
  // ─────────────────────────────
  //  CATEGORÍA: latos Fuertes
  // ─────────────────────────────
  
  // ─────────────────────────────
  //  CATEGORÍA: Aperitivos
  // ─────────────────────────────
  
  // ─────────────────────────────
  //  CATEGORÍA: Postres
  // ─────────────────────────────
  
  // ─────────────────────────────
  //  CATEGORÍA: Extras
  // ─────────────────────────────
  
  // ─────────────────────────────
  //  CATEGORÍA: Bebidas
  // ─────────────────────────────
  {
    id:          6,
    categoria:   "Bebidas",
    nombre:      "Café Americano",
    descripcion: "Café negro suave, recién molido y preparado al momento.",
    precio:      2.00,
    imagen:      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&q=80",
    destacado:   false,
    disponible:  true
  },
  {
    id:          7,
    categoria:   "Bebidas",
    nombre:      "Cappuccino",
    descripcion: "Doble espresso con leche vaporizada y espuma cremosa.",
    precio:      3.00,
    imagen:      "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=600&q=80",
    destacado:   false,
    disponible:  true
  },
  {
    id:          8,
    categoria:   "Bebidas",
    nombre:      "Jugo Natural",
    descripcion: "Naranja, piña o maracuyá exprimidos al momento. 100% fruta.",
    precio:      2.50,
    imagen:      "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=600&q=80",
    destacado:   false,
    disponible:  true
  },
  {
    id:          9,
    categoria:   "Bebidas",
    nombre:      "Chocolate Caliente",
    descripcion: "Cacao puro con leche entera, cremoso y reconfortante.",
    precio:      3.50,
    imagen:      "https://images.unsplash.com/photo-1517578239113-b03992dcdd25?w=600&q=80",
    destacado:   false,
    disponible:  true
  },

  // ─────────────────────────────
  //  CATEGORÍA: Combos
  // ─────────────────────────────


  // ─────────────────────────────
  //  ✏️  AGREGA TUS PRODUCTOS AQUÍ
  //  Copia este bloque y personalízalo:
  // ─────────────────────────────
  // ,{
  //   id:          12,
  //   categoria:   "Waffles",
  //   nombre:      "Nombre del producto",
  //   descripcion: "Descripción del producto.",
  //   precio:      0.00,
  //   imagen:      "./images/mi-foto.jpg",
  //   destacado:   false,
  //   disponible:  true
  // }

];
