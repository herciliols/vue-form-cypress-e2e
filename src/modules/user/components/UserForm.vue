<template>
  <form @submit.prevent="onSubmit" class="p-4 bg-light rounded shadow-sm w-100">
    
    <fieldset class="mb-4 border p-3 rounded w-100">
      <legend class="fs-5 mb-3">Dados Pessoais</legend>

      <div class="mb-3 w-100">
        <label for="name" class="form-label">Nome Completo</label>
        <input
          id="name"
          v-model="form.name"
          type="text"
          class="form-control"
          placeholder="Digite seu nome completo"
          required
          style="width: 100%"
        />
      </div>

      <div class="mb-3 w-100">
        <label for="email" class="form-label">Email</label>
        <input
          id="email"
          v-model="form.email"
          type="email"
          class="form-control"
          placeholder="nome@exemplo.com"
          required
          style="width: 100%"
        />
      </div>

      <div class="mb-3 w-100">
        <label for="birthdate" class="form-label">Data de Nascimento</label>
        <input
          id="birthdate"
          v-model="form.birthdate"
          type="date"
          class="form-control"
          required
          style="width: 100%"
        />
      </div>

      <div class="mb-3 w-100">
        <label for="gender" class="form-label">Gênero</label>
        <select id="gender" v-model="form.gender" class="form-select" required style="width: 100%">
          <option value="" disabled>Selecione...</option>
          <option value="male">Masculino</option>
          <option value="female">Feminino</option>
          <option value="other">Outro</option>
        </select>
      </div>
    </fieldset>

    <fieldset class="mb-4 border p-3 rounded w-100">
      <legend class="fs-5 mb-3">Senha</legend>

      <div class="mb-3 w-100">
        <label for="password" class="form-label">Senha</label>
        <input
          id="password"
          v-model="form.password"
          type="password"
          class="form-control"
          placeholder="Sua senha"
          required
          minlength="6"
          style="width: 100%"
        />
      </div>

      <div class="mb-3 w-100">
        <label for="confirmPassword" class="form-label">Confirme a Senha</label>
        <input
          id="confirmPassword"
          v-model="form.confirmPassword"
          type="password"
          class="form-control"
          placeholder="Confirme sua senha"
          required
          minlength="6"
          style="width: 100%"
        />
      </div>
    </fieldset>


    <fieldset class="mb-4 border p-3 rounded w-100">
      <legend class="fs-5 mb-3">Preferências</legend>

      <div class="mb-3 w-100">
        <label for="newsletter" class="form-label">Deseja receber nossa newsletter?</label>
        <div>
          <div class="form-check form-check-inline">
            <input
              id="newsletter-yes"
              type="radio"
              class="form-check-input"
              value="yes"
              v-model="form.newsletter"
              required
            />
            <label class="form-check-label" for="newsletter-yes">Sim</label>
          </div>
          <div class="form-check form-check-inline">
            <input
              id="newsletter-no"
              type="radio"
              class="form-check-input"
              value="no"
              v-model="form.newsletter"
            />
            <label class="form-check-label" for="newsletter-no">Não</label>
          </div>
        </div>
      </div>

      <div class="mb-3 w-100">
        <label for="bio" class="form-label">Conte um pouco sobre você</label>
        <textarea
          id="bio"
          v-model="form.bio"
          class="form-control"
          rows="4"
          placeholder="Escreva aqui..."
          style="width: 100%"
        ></textarea>
      </div>
    </fieldset>

    <div class="form-check mb-3 w-100">
      <input
        id="terms"
        v-model="form.terms"
        type="checkbox"
        class="form-check-input"
        required
      />
      <label for="terms" class="form-check-label">Aceito os termos de uso</label>
    </div>

    <button type="submit" class="btn btn-primary w-100">Cadastrar</button>
  </form>
</template>

<script setup>
import { reactive } from 'vue'

const form = reactive({
  name: '',
  email: '',
  birthdate: '',
  gender: '',
  password: '',
  confirmPassword: '',
  newsletter: '',
  bio: '',
  terms: false,
})


</script>
