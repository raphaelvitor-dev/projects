using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace fullstack_application_backend_api.Models;

public partial class FullstackApplicationDbContext : DbContext
{
    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.HasDefaultSchema("fullstack_application");
    }
    public FullstackApplicationDbContext()
    {
    }

    public FullstackApplicationDbContext(DbContextOptions<FullstackApplicationDbContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Propertylisting> Propertylistings { get; set; }
}

 