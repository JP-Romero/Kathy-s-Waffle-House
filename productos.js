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
    nombre:      "Waffle Clásico",
    descripcion: "Esponjoso y dorado con mantequilla fresca y sirope de maple.",
    precio:      5.50,
    imagen:      "https://images.unsplash.com/photo-1562376552-0d160a2f238d?w=600&q=80",
    destacado:   true,
    disponible:  true
  },
  {
    id:          2,
    categoria:   "Waffles",
    nombre:      "Waffles con Nueces o Almendras",
    descripcion: "Cobertura de fresas frescas, crema chantilly y azúcar glass.",
    precio:      7.00,
    imagen:      "https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=600&q=80",
    destacado:   true,
    disponible:  true
  },
  {
    id:          3,
    categoria:   "Waffles",
    nombre:      "Waffle con Chocolate",
    descripcion: "Salsa de chocolate belga, nueces caramelizadas y helado de vainilla.",
    precio:      7.50,
    imagen:      ".\Kathys Waffle\images\Waffle con Chocolate.jpeg",
	//C:\xampp\htdocs\Kathys Waffle\images\Waffle con Chocolate.jpeg
    destacado:   false,
    disponible:  true
  },
  {
    id:          4,
    categoria:   "Waffles",
    nombre:      "Waffle con Arandanos",
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
    nombre:      "Pancakes Clásicos",
    descripcion: "Mix de blueberries, fresas y frambuesas con coulis casero.",
    precio:      7.50,
    imagen:      "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=600&q=80",
    destacado:   false,
    disponible:  true
  },
  {
    id:          6,
    categoria:   "Pancakes",
    nombre:      "Pancakes con Chocolate",
    descripcion: "Esponjoso y dorado con mantequilla fresca y miel de maple artesanal.",
    precio:      5.50,
    imagen:      "https://images.unsplash.com/photo-1562376552-0d160a2f238d?w=600&q=80",
    destacado:   true,
    disponible:  true
  },
  {
    id:          7,
    categoria:   "Pancakes",
    nombre:      "Pancakes con Banano",
    descripcion: "Esponjoso y dorado con mantequilla fresca y miel de maple artesanal.",
    precio:      5.50,
    imagen:      "https://images.unsplash.com/photo-1562376552-0d160a2f238d?w=600&q=80",
    destacado:   true,
    disponible:  true
  },
  {
    id:          8,
    categoria:   "Pancakes",
    nombre:      "Pancakes con Manzana",
    descripcion: "Esponjoso y dorado con mantequilla fresca y miel de maple artesanal.",
    precio:      5.50,
    imagen:      "https://images.unsplash.com/photo-1562376552-0d160a2f238d?w=600&q=80",
    destacado:   true,
    disponible:  true
  },
  {
    id:          9,
    categoria:   "Pancakes",
    nombre:      "Pancakes con Piña",
    descripcion: "Esponjoso y dorado con mantequilla fresca y miel de maple artesanal.",
    precio:      5.50,
    imagen:      "https://images.unsplash.com/photo-1562376552-0d160a2f238d?w=600&q=80",
    destacado:   true,
    disponible:  true
  },
  {
    id:          10,
    categoria:   "Pancakes",
    nombre:      "Pancakes con Fresa",
    descripcion: "Esponjoso y dorado con mantequilla fresca y miel de maple artesanal.",
    precio:      5.50,
    imagen:      "https://images.unsplash.com/photo-1562376552-0d160a2f238d?w=600&q=80",
    destacado:   true,
    disponible:  true
  },
  {
    id:          11,
    categoria:   "Pancakes",
    nombre:      "Pancakes con Tocino",
    descripcion: "Esponjoso y dorado con mantequilla fresca y miel de maple artesanal.",
    precio:      5.50,
    imagen:      "https://images.unsplash.com/photo-1562376552-0d160a2f238d?w=600&q=80",
    destacado:   true,
    disponible:  true
  },
  {
    id:          12,
    categoria:   "Pancakes",
    nombre:      "Pancakes con Nueces o Almendras",
    descripcion: "Esponjoso y dorado con mantequilla fresca y miel de maple artesanal.",
    precio:      5.50,
    imagen:      "https://images.unsplash.com/photo-1562376552-0d160a2f238d?w=600&q=80",
    destacado:   true,
    disponible:  true
  },
  {
    id:          13,
    categoria:   "Pancakes",
    nombre:      "Pancakes con Arandanos",
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
    nombre:      "Tostadas Francesas",
    descripcion: "Esponjoso y dorado con mantequilla fresca y miel de maple artesanal.",
    precio:      5.50,
    imagen:      "https://images.unsplash.com/photo-1562376552-0d160a2f238d?w=600&q=80",
    destacado:   true,
    disponible:  true
  },
  {
    id:          15,
    categoria:   "Especiales de la casa",
    nombre:      "Pancakes, 3 Huevos y Tocino",
    descripcion: "Esponjoso y dorado con mantequilla fresca y miel de maple artesanal.",
    precio:      5.50,
    imagen:      "https://images.unsplash.com/photo-1562376552-0d160a2f238d?w=600&q=80",
    destacado:   true,
    disponible:  true
  },
  {
    id:          16,
    categoria:   "Especiales de la casa",
    nombre:      "Pancakes, 2 Huevos Revueltos, Tomate, Chiltoma, Cebolla y Champiñones.",
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
    nombre:      "Cereal de Avena, con Banano y Pasas.",
    descripcion: "Esponjoso y dorado con mantequilla fresca y miel de maple artesanal.",
    precio:      5.50,
    imagen:      "https://images.unsplash.com/photo-1562376552-0d160a2f238d?w=600&q=80",
    destacado:   true,
    disponible:  true
  },
  
  // ─────────────────────────────
  //  CATEGORÍA: Omelets
  // ─────────────────────────────
  
  // ─────────────────────────────
  //  CATEGORÍA: Huevos
  // ─────────────────────────────
  
  // ─────────────────────────────
  //  CATEGORÍA: Bagels
  // ─────────────────────────────
  
  // ─────────────────────────────
  //  CATEGORÍA: Platos de Frutas
  // ─────────────────────────────
  
  // ─────────────────────────────
  //  CATEGORÍA: Sandwiches
  // ─────────────────────────────
  
  // ─────────────────────────────
  //  CATEGORÍA: Hamburguesas
  // ─────────────────────────────
  
  // ─────────────────────────────
  //  CATEGORÍA: Ensaladas
  // ─────────────────────────────
  
  // ─────────────────────────────
  //  CATEGORÍA: Sopas
  // ─────────────────────────────
  
  // ─────────────────────────────
  //  CATEGORÍA: Platos Fuertes
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
  {
    id:          10,
    categoria:   "Combos",
    nombre:      "Combo Pareja",
    descripcion: "2 waffles a elección + 2 bebidas. Perfecto para compartir.",
    precio:      14.00,
    imagen:      "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600&q=80",
    destacado:   true,
    disponible:  true
  },
  {
    id:          11,
    categoria:   "Combos",
    nombre:      "Combo Familia",
    descripcion: "4 waffles clásicos + 4 bebidas a elección. ¡Ideal para todos!",
    precio:      24.00,
    imagen:      "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=600&q=80",
    destacado:   true,
    disponible:  true
  }

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
