﻿//------------------------------------------------------------------------------
// <auto-generated>
//    This code was generated from a template.
//
//    Manual changes to this file may cause unexpected behavior in your application.
//    Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace AngularJS_Test1
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Infrastructure;
    
    public partial class ItemDBEntities : DbContext
    {
        public ItemDBEntities()
            : base("name=ItemDBEntities")
        {
        }
    
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            throw new UnintentionalCodeFirstException();
        }
    
        public DbSet<NhanVien> NhanViens { get; set; }
        public DbSet<TinTuc> TinTucs { get; set; }
        public DbSet<TheLoai> TheLoais { get; set; }
    }
}
