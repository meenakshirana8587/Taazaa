using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using DepartmentalStoreApi.Entities;
using DepartmentalStoreApi.Infrastucture;
using DepartmentalStoreApi.Models;
using AutoMapper;

namespace DepartmentalStoreApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        private readonly DeptStoreContext _context;
        private readonly IMapper _mapper;

        public ProductController(DeptStoreContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;

        }

        // GET: api/Products
        [HttpGet]
        public List<ProductModel> GetProduct()
        {
            var result = _context.Product.Include(c=> c.ProductCategories);
            List<ProductModel> models = _mapper.Map<List<ProductModel>>(result);

            return models;
        }
        [HttpGet("item")]
        
        public List<ProductModel> Get(string productName=null)
        {
            
            var res = _context.Product.Where(a => a.ProductName == productName).ToList();
            List<ProductModel> models = _mapper.Map<List<ProductModel>>(res);

            return models;
        }


        // GET: api/Products/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Product>> GetProduct(long id)
        {
            var product = await _context.Product.FindAsync(id);

            if (product == null)
            {
                return NotFound();
            }

            return product;
        }

        // PUT: api/Products/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public Product PutProduct(long id, Product product)
        {
           

            _context.Entry(product).State = EntityState.Modified;
            _context.SaveChanges();


            return product;
        }

        // POST: api/Products
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public Product createProduct(Product product)
        {
            _context.Product.Add(product);
            _context.SaveChanges();
            return null;
        }
        
        // DELETE: api/Products/5
        [HttpDelete("{id}")]
        public Product DeleteProduct(long id)
        {
            var product = _context.Product.Find(id);
           

            _context.Product.Remove(product);
            _context.SaveChangesAsync();

            return product;
        }

        private bool ProductExists(long id)
        {
            return _context.Product.Any(e => e.Id == id);
        }
    }
}
