using Microsoft.EntityFrameworkCore;
using StudyProject.Data;

var builder = WebApplication.CreateBuilder(args);
var connectionString = "server=localhost; Database=DATABASE_NAME;uid=DATABASE_USER;pwd=SENHA;";
builder.Services.AddDbContext<Context>(options =>
    options.UseMySql(
        connectionString,
        ServerVersion.AutoDetect(connectionString)));
// Add services to the container.
builder.Services.AddControllersWithViews();


var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Home/Error");
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseRouting();

app.UseAuthorization();

app.MapStaticAssets();

app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Usuarios}/{action=Index}/{id?}")
    .WithStaticAssets();


app.Run();
