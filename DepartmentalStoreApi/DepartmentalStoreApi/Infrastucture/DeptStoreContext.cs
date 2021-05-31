using DepartmentalStoreApi.Entities;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DepartmentalStoreApi.Infrastucture
{
    public class DeptStoreContext : DbContext
    {
        public DbSet<Role> Role { get; set; }
        public DbSet<Address> Address { get; set; }
        public DbSet<Staff> Staff { get; set; }
        public DbSet<Product> Product { get; set; }
        public DbSet<Category> Category { get; set; }
        public DbSet<ProductCategory> ProductCategory { get; set; }


        //protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        //{
        //    //optionsBuilder.UseLoggerFactory(ConsoleLoggerFactory).EnableSensitiveDataLogging();
        //    optionsBuilder.UseNpgsql("connectionString");
        //}

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {

            //role table
            modelBuilder.Entity<Role>().HasKey(r => r.Id);
            modelBuilder.Entity<Role>().Property(r => r.RoleName).HasMaxLength(40).IsRequired();
            modelBuilder.Entity<Role>().Property(r => r.Description).HasMaxLength(50);

            //address table
            modelBuilder.Entity<Address>().HasKey(a => a.Id);
            modelBuilder.Entity<Address>().Property(a => a.AddressLine1).HasMaxLength(30).IsRequired();
            modelBuilder.Entity<Address>().Property(a => a.AddressLine2).HasMaxLength(30);
            modelBuilder.Entity<Address>().Property(a => a.City).HasMaxLength(20).IsRequired();
            modelBuilder.Entity<Address>().Property(a => a.State).HasMaxLength(20).IsRequired();
            modelBuilder.Entity<Address>().Property(a => a.Pincode).HasMaxLength(10).IsRequired();

            //staff table
            modelBuilder.Entity<Staff>().HasKey(s => s.Id);
            modelBuilder.Entity<Staff>().Property(s => s.Firstname).HasMaxLength(30).IsRequired();
            modelBuilder.Entity<Staff>().Property(s => s.LastName).HasMaxLength(30);
            modelBuilder.Entity<Staff>().Property(s => s.Gender).HasMaxLength(1);
            modelBuilder.Entity<Staff>().Property(s => s.Phone).HasMaxLength(10);
            modelBuilder.Entity<Staff>().HasOne(s => s.Address).WithMany(a => a.Staffs).HasForeignKey(f => f.AddressId);

            //product table



            modelBuilder.Entity<Product>().HasKey(r => r.Id);
            modelBuilder.Entity<Product>().Property(r => r.ProductName).HasMaxLength(30).IsRequired();
            modelBuilder.Entity<Product>().Property(r => r.ShortCode).HasMaxLength(6).IsRequired();
            modelBuilder.Entity<Product>().Property(r => r.CostPrice).HasColumnType("numeric(7,2)").IsRequired();
            modelBuilder.Entity<Product>().Property(r => r.SellingPrice).HasColumnType("numeric(7,2)").IsRequired();
            modelBuilder.Entity<Product>().Property(r => r.BrandName).HasMaxLength(30).IsRequired();

            //category table
            modelBuilder.Entity<Category>().HasKey(r => r.Id);
            modelBuilder.Entity<Category>().Property(r => r.CategoryName).HasMaxLength(30).IsRequired();

            //productcategory table
            modelBuilder.Entity<ProductCategory>().HasKey(pc => new { pc.ProductId, pc.CategoryId });
        }

        public DeptStoreContext(DbContextOptions<DeptStoreContext> options) : base(options)
        {

        }
    }
}
