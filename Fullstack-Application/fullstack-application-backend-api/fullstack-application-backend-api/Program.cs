using fullstack_application_backend_api.Models;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi
builder.Services.AddOpenApi();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

IConfiguration config;

config = new ConfigurationBuilder().AddJsonFile("appsettings.json").Build();
builder.Services.AddDbContext<FullstackApplicationDbContext>(option => option.UseNpgsql(config.GetConnectionString("AppDbConnection")));

var allowedOrigins = "_myAllowSpecificOrigins";
builder.Services.AddCors(options =>
{
    options.AddPolicy(name: allowedOrigins, builder =>
    {
        builder.WithOrigins("http://localhost", "http://localhost:5173").AllowAnyHeader()
        .AllowAnyMethod().SetIsOriginAllowedToAllowWildcardSubdomains();

    });
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
    app.MapOpenApi();
}

app.UseHttpsRedirection();
app.UseCors(allowedOrigins);
app.UseAuthorization();

app.MapControllers();

app.Run();
